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
exports.DenialmanagementService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DenialmanagementService = class DenialmanagementService {
    constructor(claimModel) {
        this.claimModel = claimModel;
    }
    async get_overall_value() {
        const each_splitup = await this.claimModel.aggregate([
            {
                $match: {
                    $and: [
                        { ClaimStatus: "denied" },
                        { Touch: { $gt: 0 } }
                    ]
                },
            },
            {
                $group: {
                    _id: "$Touch",
                    totalcount: {
                        $sum: 1,
                    },
                    totalamount: {
                        $sum: "$TotalBilledAmount",
                    },
                },
            },
            {
                $sort: { _id: 1 },
            },
        ]);
        const morethanfour = await this.claimModel.aggregate([
            {
                $match: {
                    $and: [
                        { ClaimStatus: "denied" },
                        { Touch: { $gt: 4 } }
                    ]
                },
            },
            {
                $group: {
                    _id: null,
                    totalcount: { $sum: 1 },
                    totalamount: { $sum: "$TotalBilledAmount" },
                },
            },
        ]);
        const overall_value = await this.claimModel.aggregate([
            {
                $match: {
                    $and: [
                        { ClaimStatus: "denied" },
                        { Touch: { $gt: 0 } }
                    ]
                },
            },
            {
                $group: {
                    _id: null,
                    totalcount: { $sum: 1 },
                    totalamount: { $sum: "$TotalBilledAmount" },
                },
            },
        ]);
        return [each_splitup, morethanfour, overall_value];
    }
    async get_category_value(obj) {
        const each_splitup = Number(obj.touch);
        const morethanfour = Number(obj.abovefour);
        const overall = Number(obj.overall);
        if (!overall && !morethanfour) {
            const category_splitup = await this.claimModel.aggregate([
                {
                    $match: {
                        $and: [
                            { ClaimStatus: "denied" },
                            { Touch: each_splitup },
                            { Touch: { $gt: 0 } }
                        ]
                    }
                },
                {
                    $group: {
                        _id: "$ClaimCategory",
                        totalcount: { $sum: 1 },
                        totalamount: { $sum: "$TotalBilledAmount" },
                    },
                },
                {
                    $sort: { _id: 1 },
                },
            ]);
            return category_splitup;
        }
        else if (!overall && !each_splitup) {
            const category_splitup = await this.claimModel.aggregate([
                {
                    $match: {
                        $and: [
                            { ClaimStatus: "denied" },
                            { Touch: { $gt: 4 } },
                        ]
                    },
                },
                {
                    $group: {
                        _id: "$ClaimCategory",
                        totalcount: { $sum: 1 },
                        totalamount: { $sum: "$TotalBilledAmount" },
                    },
                },
                {
                    $sort: { _id: 1 },
                },
            ]);
            return category_splitup;
        }
        else {
            const category_splitup = await this.claimModel.aggregate([
                {
                    $match: {
                        $and: [
                            { ClaimStatus: "denied" },
                            { Touch: { $gt: 0 } },
                        ]
                    },
                },
                {
                    $group: {
                        _id: "$ClaimCategory",
                        totalcount: { $sum: 1 },
                        totalamount: { $sum: "$TotalBilledAmount" },
                    },
                },
                {
                    $sort: { _id: 1 },
                },
            ]);
            return category_splitup;
        }
    }
    async get_subcategory_value(obj) {
        const each_splitup = Number(obj.touch);
        const morethanfour = Number(obj.abovefour);
        const overall = Number(obj.overall);
        const category = obj.category;
        if (!overall && !morethanfour) {
            const subcategory_splitup = await this.claimModel.aggregate([
                {
                    $match: {
                        $and: [
                            { ClaimStatus: "denied" },
                            { Touch: each_splitup },
                            { Touch: { $gt: 0 } },
                            { ClaimCategory: category }
                        ]
                    }
                },
                {
                    $group: {
                        _id: { subcategory: "$claimSubCategory", agegrp: "$AgeGrp" },
                        totalcount: { $sum: 1 },
                        totalamount: { $sum: "$TotalBilledAmount" },
                    },
                },
                {
                    $group: {
                        _id: "$_id.subcategory",
                        subcategoryagewise: {
                            $push: {
                                agegrp: "$_id.agegrp",
                                totalamount: {
                                    $sum: "$totalamount",
                                },
                                totalcount: {
                                    $sum: "$totalcount"
                                }
                            }
                        },
                        grandtotal: { $sum: "$totalamount" }
                    }
                },
                {
                    $sort: { _id: 1 },
                },
            ]);
            console.log("split claims", subcategory_splitup);
            return subcategory_splitup;
        }
        else if (!overall && !each_splitup) {
            const subcategory_splitup = await this.claimModel.aggregate([
                {
                    $match: {
                        $and: [
                            { ClaimStatus: "denied" },
                            { Touch: { $gt: 4 } },
                            { ClaimCategory: category }
                        ]
                    },
                }, {
                    $group: {
                        _id: { subcategory: "$claimSubCategory", agegrp: "$AgeGrp" },
                        totalcount: { $sum: 1 },
                        totalamount: { $sum: "$TotalBilledAmount" },
                    },
                },
                {
                    $group: {
                        _id: "$_id.subcategory",
                        subcategoryagewise: {
                            $push: {
                                agegrp: "$_id.agegrp",
                                totalamount: {
                                    $sum: "$totalamount",
                                },
                                totalcount: {
                                    $sum: "$totalcount"
                                }
                            }
                        },
                        grandtotal: { $sum: "$totalamount" }
                    }
                },
                {
                    $sort: { _id: 1 },
                },
            ]);
            console.log("more 4 claims", subcategory_splitup);
            return subcategory_splitup;
        }
        else {
            const subcategory_splitup = await this.claimModel.aggregate([
                {
                    $match: {
                        $and: [
                            { ClaimStatus: "denied" },
                            { Touch: { $gt: 0 } },
                            { ClaimCategory: category }
                        ]
                    },
                },
                {
                    $group: {
                        _id: { subcategory: "$claimSubCategory", agegrp: "$AgeGrp" },
                        totalcount: { $sum: 1 },
                        totalamount: { $sum: "$TotalBilledAmount" },
                    },
                },
                {
                    $group: {
                        _id: "$_id.subcategory",
                        subcategoryagewise: {
                            $push: {
                                agegrp: "$_id.agegrp",
                                totalamount: {
                                    $sum: "$totalamount",
                                },
                                totalcount: {
                                    $sum: "$totalcount"
                                }
                            }
                        },
                        grandtotal: { $sum: "$totalamount" }
                    }
                },
                {
                    $sort: { _id: 1 },
                },
            ]);
            console.log("overall claims", subcategory_splitup);
            return subcategory_splitup;
        }
    }
    async get_denialclaim(obj) {
        const each_splitup = Number(obj.touch);
        const morethanfour = Number(obj.abovefour);
        const overall = Number(obj.overall);
        const category = obj.category;
        const subcategory = obj.subcategory;
        const agegrp = obj.agegrp;
        if (!overall && !morethanfour) {
            const claims = await this.claimModel.find({
                $and: [
                    { ClaimStatus: "denied" },
                    { Touch: each_splitup },
                    { ClaimCategory: category },
                    { claimSubCategory: subcategory },
                    { AgeGrp: agegrp }
                ]
            });
            return claims;
        }
        else if (!overall && !each_splitup) {
            const claims = await this.claimModel.find({
                $and: [
                    { ClaimStatus: "denied" },
                    { Touch: { $gt: 4 } },
                    { ClaimCategory: category },
                    { claimSubCategory: subcategory },
                    { AgeGrp: agegrp }
                ]
            });
            return claims;
        }
        else {
            const claims = await this.claimModel.find({
                $and: [
                    { ClaimStatus: "denied" },
                    { Touch: { $gt: 0 } },
                    { ClaimCategory: category },
                    { claimSubCategory: subcategory },
                    { AgeGrp: agegrp }
                ]
            });
            return claims;
        }
    }
};
DenialmanagementService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("Claim")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DenialmanagementService);
exports.DenialmanagementService = DenialmanagementService;
//# sourceMappingURL=denialmanagement.service.js.map