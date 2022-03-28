"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const claim_schema_1 = require("../schemas/claim.schema");
const cpt_schema_1 = require("../schemas/cpt.schema");
let OutcomeService = class OutcomeService {
    constructor(ClaimModel, CptModel) {
        this.ClaimModel = ClaimModel;
        this.CptModel = CptModel;
    }
    async getall() {
        const appealsuccess = await this.ClaimModel.aggregate([
            {
                $match: { Touch: { $gt: 0 } },
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBalanceAmount",
                    },
                },
            },
        ]);
        const denialbytfl = await this.ClaimModel.aggregate([
            {
                $match: { DenialCategory: "Tfl" },
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBalanceAmount",
                    },
                },
            },
        ]);
        const zeropaid = await this.ClaimModel.aggregate([
            {
                $match: { Overallcptstatus: "ZeroPaid" },
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBalanceAmount",
                    },
                },
            },
        ]);
        const partialpaid = await this.ClaimModel.aggregate([
            {
                $match: { Overallcptstatus: "Partially paid" },
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBalanceAmount",
                    },
                },
            },
        ]);
        const denialbyagewise = await this.ClaimModel.aggregate([
            {
                $match: { Denialtime: { $gt: 0 } },
            },
            {
                $group: {
                    _id: "$AgeGrp",
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBalanceAmount",
                    },
                },
            },
            {
                $sort: { totalcount: 1 },
            },
        ]);
        const touchwise = await this.ClaimModel.aggregate([
            {
                $project: {
                    Touch: 1,
                    TotalBalanceAmount: 1,
                },
            },
            {
                $group: {
                    _id: "$Touch",
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBalanceAmount",
                    },
                },
            },
            {
                $sort: { _id: 1 },
            },
        ]);
        return [
            appealsuccess,
            denialbytfl,
            zeropaid,
            partialpaid,
            denialbyagewise,
            touchwise,
        ];
    }
    async account_receivables() {
        let outputarr = [];
        const totalclaimscount1 = await this.ClaimModel.find({
            OverallClaimStatus: "Completed",
        }).count();
        const claimagecount1 = await this.ClaimModel.find({
            Age: { $gte: 90 },
            OverallClaimStatus: "Completed",
        }).count();
        const percentage1 = (claimagecount1 / totalclaimscount1) * 100;
        const Percentage1 = percentage1.toFixed(2);
        outputarr.push(Percentage1 + "%");
        const totalclaimscount2 = await this.ClaimModel.find({
            OverallClaimStatus: "Completed",
        }).count();
        const claimagecount2 = await this.ClaimModel.find({
            Age: { $gte: 120 },
            OverallClaimStatus: "Completed",
        }).count();
        const percentage2 = (claimagecount2 / totalclaimscount2) * 100;
        const Percentage2 = percentage2.toFixed(2);
        outputarr.push(Percentage2 + "%");
        const totalclaimscount3 = await this.ClaimModel.find({
            OverallClaimStatus: "Completed",
        }).count();
        const claimagecount3 = await this.ClaimModel.find({
            Age: { $gte: 365 },
            OverallClaimStatus: "Completed",
        }).count();
        const percentage3 = (claimagecount3 / totalclaimscount3) * 100;
        const Percentage3 = percentage3.toFixed(2);
        outputarr.push(Percentage3 + "%");
        return outputarr;
    }
    async percent_of_appealondenial() {
        const denialcount = await this.ClaimModel.find({
            Denialtime: { $gt: 0 },
        }).count();
        const touchcount = await this.ClaimModel.find({
            Touch: { $gt: 0 },
            Denialtime: { $gt: 0 },
        }).count();
        console.log("d1", denialcount);
        console.log("d2", touchcount);
        const percentage = (touchcount / denialcount) * 100;
        const Percentage = percentage.toFixed(2);
        return Percentage + "%";
    }
    async get_actionwise() {
        const denied = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "denied" },
            },
            {
                $group: {
                    _id: "$ClaimStatus",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const paid = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "paid" },
            },
            {
                $group: {
                    _id: "$ClaimStatus",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const nis = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "open" },
            },
            {
                $group: {
                    _id: "$ClaimStatus",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const acknowledgement = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "Acknowledgement" },
            },
            {
                $group: {
                    _id: "$ClaimStatus",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const pending = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "pending" },
            },
            {
                $group: {
                    _id: "$ClaimStatus",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const finalized = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "Finalized" },
            },
            {
                $group: {
                    _id: "$ClaimStatus",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const request = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "Request" },
            },
            {
                $group: {
                    _id: "$ClaimStatus",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const error = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "error" },
            },
            {
                $group: {
                    _id: "$ClaimStatus",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const searches = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "searches" },
            },
            {
                $group: {
                    _id: "$ClaimStatus",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        return {
            denied,
            paid,
            nis,
            acknowledgement,
            pending,
            finalized,
            request,
            searches,
            error,
        };
    }
    async get_payerclasswise() {
        const denied = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "denied" },
            },
            {
                $group: {
                    _id: "$Payercategory",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const paid = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "paid" },
            },
            {
                $group: {
                    _id: "$Payercategory",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const nis = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "open" },
            },
            {
                $group: {
                    _id: "$Payercategory",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        return {
            denied,
            paid,
            nis,
        };
    }
    async get_cptwise() {
        const denied = await this.CptModel.aggregate([
            {
                $match: { ClaimStatus: "denied" },
            },
            {
                $group: {
                    _id: "$CPTCode",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$submittedAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const paid = await this.CptModel.aggregate([
            {
                $match: { ClaimStatus: "paid" },
            },
            {
                $group: {
                    _id: "$CPTCode",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$submittedAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const nis = await this.CptModel.aggregate([
            {
                $match: { ClaimStatus: "open" },
            },
            {
                $group: {
                    _id: "$CPTCode",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$submittedAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        return {
            denied,
            paid,
            nis,
        };
    }
    async get_agewise() {
        const denied = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "denied" },
            },
            {
                $group: {
                    _id: "$AgeGrp",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const paid = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "paid" },
            },
            {
                $group: {
                    _id: "$AgeGrp",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const nis = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "open" },
            },
            {
                $group: {
                    _id: "$AgeGrp",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        return {
            denied,
            paid,
            nis,
        };
    }
    async get_payerwise() {
        const denied = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "denied" },
            },
            {
                $group: {
                    _id: "$Pripayer",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const paid = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "paid" },
            },
            {
                $group: {
                    _id: "$Pripayer",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const nis = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "open" },
            },
            {
                $group: {
                    _id: "$Pripayer",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        return {
            denied,
            paid,
            nis,
        };
    }
    async get_departmentwise() {
        const department = await this.ClaimModel.aggregate([
            {
                $group: {
                    _id: "$ClaimCategory",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        return department;
    }
    async get_typewise() {
        const web = await this.ClaimModel.aggregate([
            {
                $match: { type: "Web" },
            },
            {
                $group: {
                    _id: "$type",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const ivr = await this.ClaimModel.aggregate([
            {
                $match: { type: "IVR" },
            },
            {
                $group: {
                    _id: "$type",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        const calling = await this.ClaimModel.aggregate([
            {
                $match: { type: "Manual" },
            },
            {
                $group: {
                    _id: "$type",
                    totalClaims: {
                        $sum: 1,
                    },
                    totalAmount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalAmount: -1 },
            },
        ]);
        return [web, ivr, calling];
    }
    async get_topdenialreason() {
        const topdenialreason = await this.ClaimModel.aggregate([
            {
                $match: { ClaimStatus: "denied" },
            },
            {
                $group: {
                    _id: "$Reason",
                    totalcount: {
                        $sum: 1,
                    },
                    category: {
                        $first: "$ClaimCategory",
                    },
                    subcategory: {
                        $first: "$claimSubCategory",
                    },
                },
            },
            {
                $sort: { totalcount: -1 },
            },
        ]);
        return topdenialreason;
    }
};
OutcomeService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("Claim")),
    __param(1, mongoose_1.InjectModel("Cpt")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], OutcomeService);
exports.OutcomeService = OutcomeService;
//# sourceMappingURL=outcome.service.js.map