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
exports.ClaimallocationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ClaimallocationService = class ClaimallocationService {
    constructor(claimModel) {
        this.claimModel = claimModel;
    }
    async filter_claims(obj) {
        let values = [];
        let keys = [];
        for (let x in obj) {
            keys.push(obj);
            values.push(obj[x]);
        }
        console.log("values", values);
        console.log("keys", keys);
        if (values.length === 1) {
            const claim = await this.claimModel.find({
                Claimunder: null,
                $or: [
                    { Payercategory: obj.payercategory },
                    { AgeGrp: obj.agegrp },
                    { CPTS: obj.cptcode },
                ],
            });
            return claim;
        }
        else if (values.length === 2) {
            const claim = await this.claimModel.find({
                Claimunder: null,
                $or: [
                    {
                        $and: [
                            { Payercategory: obj.payercategory },
                            { AgeGrp: obj.agegrp },
                        ],
                    },
                    {
                        $and: [{ Payercategory: obj.payercategory }, { CPTS: obj.cptcode }],
                    },
                    {
                        $and: [{ AgeGrp: obj.agegrp }, { CPTS: obj.cptcode }],
                    },
                ],
            });
            return claim;
        }
        else if (values.length === 3) {
            const claim = await this.claimModel.find({
                Claimunder: null,
                $and: [
                    { Payercategory: obj.payercategory },
                    { AgeGrp: obj.agegrp },
                    { CPTS: obj.cptcode },
                ],
            });
            return claim;
        }
    }
    async allocate_claims(ids, req) {
        const claim = await this.claimModel.updateMany({ _id: { $in: ids } }, { $set: { Claimunder: req.params.id } });
        return claim;
    }
    async unallocatedclaims() {
        const claim = await this.claimModel.find({
            Claimunder: null,
        });
        return claim;
    }
    async allocated() {
        const claim = await this.claimModel.find({
            Claimunder: { $ne: null },
        });
        return claim;
    }
    async multipleuser_allocate_claims(claimids, obj) {
        let userids = [];
        for (let x in obj) {
            userids.push(obj[x]);
        }
        const claimlength = claimids.length;
        const usercount = userids.length;
        const splitup = Math.floor(claimlength / usercount);
        const equalsplitup = splitup * usercount;
        const remaining_claims_length = claimlength - equalsplitup;
        for (let i = 0; i < usercount; i++) {
            const initial = i * splitup;
            const final = splitup * (i + 1);
            const claimstoallocate = claimids.slice(initial, final);
            const claim = await this.claimModel.updateMany({ _id: { $in: claimstoallocate } }, { $set: { Claimunder: userids[i] } });
            if (remaining_claims_length !== 0) {
                const remaining_claims = claimids.slice(equalsplitup);
                const claim = await this.claimModel.updateMany({ _id: { $in: remaining_claims } }, { $set: { Claimunder: userids[userids.length - 1] } });
            }
        }
    }
    async advanced_search_filter_data(obj) {
        let value = [];
        for (let x in obj) {
            value.push(obj[x]);
        }
        console.log("obj", obj);
        console.log("values", value);
        if (value.length <= 4) {
            const claim = await this.claimModel.find({
                Claimunder: { $ne: null },
                $and: [obj],
            });
            return claim;
        }
    }
};
ClaimallocationService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("Claim")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClaimallocationService);
exports.ClaimallocationService = ClaimallocationService;
//# sourceMappingURL=claimallocation.service.js.map