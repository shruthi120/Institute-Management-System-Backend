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
exports.InventoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const claim_schema_1 = require("../schemas/claim.schema");
const cpt_schema_1 = require("../schemas/cpt.schema");
const payermaster_schema_1 = require("../schemas/payermaster.schema");
const upload_schema_1 = require("../schemas/upload.schema");
let InventoryService = class InventoryService {
    constructor(ClaimModel, CptModel, UploadModel) {
        this.ClaimModel = ClaimModel;
        this.CptModel = CptModel;
        this.UploadModel = UploadModel;
    }
    async getall() {
        const cptwise = await this.CptModel.aggregate([
            {
                $group: {
                    _id: "$CPTCode",
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$submittedAmount",
                    },
                },
            },
            {
                $sort: { totalamount: -1 },
            },
        ]);
        const pripayerwise = await this.ClaimModel.aggregate([
            {
                $group: {
                    _id: { company: "$Pripayer", agegrp: "$AgeGrp" },
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $group: {
                    _id: "$_id.company",
                    pripayerwithages: {
                        $push: {
                            agegrp: "$_id.agegrp",
                            totalamount: {
                                $sum: "$totalamount",
                            },
                        },
                    },
                },
            },
            {
                $sort: { _id: 1 },
            },
        ]);
        const pripayamount = await this.ClaimModel.aggregate([
            {
                $group: {
                    _id: "$Pripayer",
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalamount: -1 },
            },
        ]);
        const agegrpwise = await this.ClaimModel.aggregate([
            {
                $group: {
                    _id: "$AgeGrp",
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalamount: -1 },
            },
        ]);
        const payercategorywise = await this.ClaimModel.aggregate([
            {
                $group: {
                    _id: { company: "$Payercategory" },
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $group: {
                    _id: null,
                    payercategory: {
                        $push: {
                            payercategory: "$_id.company",
                            totalamount: {
                                $sum: "$totalamount",
                            },
                        },
                    },
                },
            },
            {
                $sort: { totalamount: -1 },
            },
        ]);
        const agewise0_30 = await this.ClaimModel.aggregate([
            {
                $match: { AgeGrp: "0-30days" },
            },
            {
                $group: {
                    _id: "$Pripayer",
                    agegrp: {
                        $first: "$AgeGrp",
                    },
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalamount: -1 },
            },
            {
                $limit: 5,
            },
        ]);
        const agewise31_60 = await this.ClaimModel.aggregate([
            {
                $match: { AgeGrp: "31-60days" },
            },
            {
                $group: {
                    _id: "$Pripayer",
                    agegrp: {
                        $first: "$AgeGrp",
                    },
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalamount: -1 },
            },
            {
                $limit: 5,
            },
        ]);
        const agewise61_90 = await this.ClaimModel.aggregate([
            {
                $match: { AgeGrp: "61-90days" },
            },
            {
                $group: {
                    _id: "$Pripayer",
                    agegrp: {
                        $first: "$AgeGrp",
                    },
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalamount: -1 },
            },
            {
                $limit: 5,
            },
        ]);
        const agewise91_120 = await this.ClaimModel.aggregate([
            {
                $match: { AgeGrp: "91-120days" },
            },
            {
                $group: {
                    _id: "$Pripayer",
                    agegrp: {
                        $first: "$AgeGrp",
                    },
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalamount: -1 },
            },
            {
                $limit: 5,
            },
        ]);
        const agewise121_180 = await this.ClaimModel.aggregate([
            {
                $match: { AgeGrp: "121-180days" },
            },
            {
                $group: {
                    _id: "$Pripayer",
                    agegrp: {
                        $first: "$AgeGrp",
                    },
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalamount: -1 },
            },
            {
                $limit: 5,
            },
        ]);
        const agewise181_365 = await this.ClaimModel.aggregate([
            {
                $match: { AgeGrp: "181-365days" },
            },
            {
                $group: {
                    _id: "$Pripayer",
                    agegrp: {
                        $first: "$AgeGrp",
                    },
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalamount: -1 },
            },
            {
                $limit: 5,
            },
        ]);
        const agewiseabove365days = await this.ClaimModel.aggregate([
            {
                $match: { AgeGrp: "365+days" },
            },
            {
                $group: {
                    _id: "$Pripayer",
                    agegrp: {
                        $first: "$AgeGrp",
                    },
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { totalamount: -1 },
            },
            {
                $limit: 5,
            },
        ]);
        return [
            cptwise,
            pripayerwise,
            agegrpwise,
            payercategorywise,
            pripayamount,
            agewise0_30,
            agewise31_60,
            agewise61_90,
            agewise91_120,
            agewise121_180,
            agewise181_365,
            agewiseabove365days,
        ];
    }
    async overallcount() {
        const Grandamount = await this.ClaimModel.aggregate([
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
        ]);
        const Web = await this.ClaimModel.aggregate([
            {
                $match: {
                    type: "Web"
                },
            },
            {
                $group: {
                    _id: "$type",
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
        ]);
        const IVR = await this.ClaimModel.aggregate([
            {
                $match: {
                    type: "IVR",
                },
            },
            {
                $group: {
                    _id: "$type",
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
        ]);
        const Manual = await this.ClaimModel.aggregate([
            {
                $match: {
                    type: "Manual"
                },
            },
            {
                $group: {
                    _id: "$type",
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
        ]);
        const accountrecievable = await this.ClaimModel.aggregate([
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalAmountpaid",
                    },
                },
            },
        ]);
        const denialcount = await this.ClaimModel.aggregate([
            {
                $match: { Denialtime: { $gt: 0 } },
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
        ]);
        return [Grandamount, Web, IVR, Manual, accountrecievable, denialcount];
    }
    async getcharges_collections() {
        var data = [];
        var temp;
        for (var i = 1; i <= 12; i++) {
            const chargescollections = await this.ClaimModel.aggregate([
                {
                    $project: {
                        paidDate: { $month: "$paidDate" },
                        TotalBilledAmount: 1,
                        TotalAmountpaid: 1,
                    },
                },
                {
                    $match: { paidDate: i },
                },
                {
                    $group: {
                        _id: null,
                        total1: { $sum: "$TotalBilledAmount" },
                        total2: { $sum: "$TotalAmountpaid" },
                    },
                },
            ]);
            if (chargescollections.length === 1) {
                temp = {
                    month: i,
                    collection: chargescollections[0].total1,
                    charges: chargescollections[0].total2,
                };
            }
            else {
                temp = {
                    month: i,
                    collection: 0,
                    charges: 0,
                };
            }
            data.push(temp);
        }
        return data;
    }
    async get_claim_insertdata(year) {
        var data = [];
        var temp;
        var yearnumber = Number(year);
        for (var i = 1; i <= 12; i++) {
            const insertdata = await this.UploadModel.aggregate([
                {
                    $project: {
                        createdAtyear: { $year: "$createdAt" },
                        createdAtmonth: { $month: "$createdAt" },
                        inserted: 1,
                        notinserted: 1,
                    },
                },
                {
                    $match: { createdAtyear: yearnumber, createdAtmonth: i },
                },
                {
                    $group: {
                        _id: null,
                        inserted: { $sum: "$inserted" },
                        notinserted: { $sum: "$notinserted" },
                    },
                },
            ]);
            if (insertdata.length === 1) {
                temp = {
                    month: i,
                    inserted: insertdata[0].inserted,
                    notinserted: insertdata[0].notinserted,
                };
            }
            else {
                temp = {
                    month: i,
                    inserted: 0,
                    notinserted: 0,
                };
            }
            data.push(temp);
        }
        return data;
    }
    async getby_touch() {
        const touch = await this.ClaimModel.aggregate([
            {
                $group: {
                    _id: "$Touch",
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { _id: 1 },
            },
        ]);
        return touch;
    }
    async get_monthlycharges() {
        const month = await this.ClaimModel.aggregate([
            {
                $group: {
                    _id: { month: { $month: "$CreatedAt" } },
                    totalclaim: { $sum: 1 },
                    totalamount: { $sum: "$TotalBilledAmount" },
                },
            },
            {
                $group: {
                    _id: "$_id.month",
                    monthcount: {
                        $push: {
                            totalclaim: "$totalclaim",
                            totalamount: "$totalamount",
                        },
                    },
                },
            },
            {
                $sort: { _id: 1 },
            },
        ]);
        return month;
    }
    async get_daywise() {
        const day = await this.UploadModel.aggregate([
            {
                $group: {
                    _id: {
                        month: { $month: "$CreatedAt" },
                        day: { $dayOfMonth: "$CreatedAt" },
                    },
                    totalclaim: { $sum: 1 },
                    denialclaims: { $sum: "$notinserted" },
                    freshclaims: { $sum: "$inserted" },
                },
            },
            {
                $group: {
                    _id: "$_id.month",
                    monthcount: {
                        $push: {
                            day: "$_id.day",
                            denialclaims: "$denialclaims",
                            freshclaims: "$freshclaims",
                        },
                    },
                },
            },
            {
                $sort: { _id: 1 },
            },
        ]);
        return day;
    }
};
InventoryService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("Claim")),
    __param(1, mongoose_1.InjectModel("Cpt")),
    __param(2, mongoose_1.InjectModel("Upload")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], InventoryService);
exports.InventoryService = InventoryService;
//# sourceMappingURL=inventory.service.js.map