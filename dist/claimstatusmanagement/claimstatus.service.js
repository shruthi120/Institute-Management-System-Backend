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
exports.ClaimStatusService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ClaimStatusService = class ClaimStatusService {
    constructor(claimModel) {
        this.claimModel = claimModel;
    }
    async get_category_value() {
        const category_splitup = await this.claimModel.aggregate([
            {
                $match: {
                    $and: [
                        { ClaimStatus: { $ne: "denied" } },
                        { statusCategoryCode: { $ne: "" } },
                        { statusCategoryCode: { $ne: null } },
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
    async get_subcategory_value(obj) {
        const category = obj.ClaimCategory;
        const subcategory_splitup = await this.claimModel.aggregate([
            {
                $match: {
                    ClaimCategory: category
                }
            },
            {
                $group: {
                    _id: "$statusCategoryCode",
                    totalcount: { $sum: 1 },
                    totalamount: { $sum: "$TotalBilledAmount" },
                },
            },
            {
                $sort: { _id: 1 },
            },
        ]);
        return subcategory_splitup;
    }
    async get_subcategory_claims(obj) {
        const category = obj.ClaimCategory;
        const subcategory = obj.statusCategoryCode;
        const subcategoryclaims = await this.claimModel.find({
            $and: [
                { ClaimCategory: category },
                { statusCategoryCode: subcategory }
            ]
        });
        return subcategoryclaims;
    }
};
ClaimStatusService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("Claim")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClaimStatusService);
exports.ClaimStatusService = ClaimStatusService;
//# sourceMappingURL=claimstatus.service.js.map