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
exports.UserclaimsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const claim_schema_1 = require("../schemas/claim.schema");
let UserclaimsService = class UserclaimsService {
    constructor(claimModel) {
        this.claimModel = claimModel;
    }
    async getclaimperuser(userid) {
        console.log(userid);
        const claims = await this.claimModel.aggregate([
            {
                $match: { Claimunder: userid },
            },
            {
                $lookup: {
                    from: "cpts",
                    localField: "ClaimID",
                    foreignField: "ClaimID",
                    as: "cpt",
                },
            },
        ]);
        return claims;
    }
    async getclaimdenied(userid) {
        console.log(userid);
        const claims = await this.claimModel.aggregate([
            {
                $match: { Claimunder: userid,
                    ClaimStatus: "Denied" },
            },
            {
                $lookup: {
                    from: "cpts",
                    localField: "ClaimID",
                    foreignField: "ClaimID",
                    as: "cpt",
                },
            },
        ]);
        return claims;
    }
    async getclaimprogress(userid) {
        console.log(userid);
        const claims = await this.claimModel.aggregate([
            {
                $match: { Claimunder: userid,
                    ClaimStatus: "Inprogress" },
            },
            {
                $lookup: {
                    from: "cpts",
                    localField: "ClaimID",
                    foreignField: "ClaimID",
                    as: "cpt",
                },
            },
        ]);
        return claims;
    }
    async getclaimcomplete(userid) {
        console.log(userid);
        const claims = await this.claimModel.aggregate([
            {
                $match: { Claimunder: userid,
                    ClaimStatus: "Completed" },
            },
            {
                $lookup: {
                    from: "cpts",
                    localField: "ClaimID",
                    foreignField: "ClaimID",
                    as: "cpt",
                },
            },
        ]);
        return claims;
    }
    async get_by_filter(id) {
        const totalclaims = await this.claimModel.aggregate([
            {
                $match: { Claimunder: id },
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    }
                },
            }
        ]);
        const denialclaims = await this.claimModel.aggregate([
            {
                $match: { Claimunder: id,
                    ClaimStatus: "Denied" },
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    }
                },
            }
        ]);
        const progressclaims = await this.claimModel.aggregate([
            {
                $match: { Claimunder: id,
                    ClaimStatus: "Inprogress" },
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    }
                },
            }
        ]);
        const completedclaims = await this.claimModel.aggregate([
            {
                $match: { Claimunder: id,
                    ClaimStatus: "Completed" },
            },
            {
                $group: {
                    _id: null,
                    totalcount: {
                        $sum: 1,
                    }
                },
            }
        ]);
        return [totalclaims, denialclaims, progressclaims, completedclaims];
    }
};
UserclaimsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Claim')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserclaimsService);
exports.UserclaimsService = UserclaimsService;
//# sourceMappingURL=userclaims.service.js.map