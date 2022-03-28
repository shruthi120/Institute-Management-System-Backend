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
exports.AllocationController = void 0;
const common_1 = require("@nestjs/common");
const allocation_service_1 = require("./allocation.service");
const jwt_access_guard_1 = require("../auth/jwt-access-guard");
let AllocationController = class AllocationController {
    constructor(allocationService) {
        this.allocationService = allocationService;
    }
    async bucketcount(req, res) {
        const response = await this.allocationService.bucket_count();
        return res.status(common_1.HttpStatus.OK).json({
            message: "Total count and amount bucket wise",
            tflcount: response[0],
            fastapproachcount: response[1],
            twotouchcount: response[2],
            threetouchcount: response[3],
            fourormorecount: response[4],
            lessthan180dayscount: response[5],
            lowfollowupcount: response[6],
            claimsmorethan30days: response[7],
            claimslessthan30days: response[8],
            claimsmorethan60days: response[9],
            claimslessthan90days: response[10],
            claim: response[11],
        });
    }
    async tflexceed_webClaims(req, res) {
        const response = await this.allocationService.tflexceed_webClaims();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of tfl exceed web claims ",
            timeexceed: response,
        });
    }
    async tflexceed_ivrClaims(req, res) {
        const response = await this.allocationService.tflexceed_ivrClaims();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of tfl exceed ivr claims ",
            timeexceed: response,
        });
    }
    async tflexceed_manualClaims(req, res) {
        const response = await this.allocationService.tflexceed_manualClaims();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of tfl exceed manual claims ",
            timeexceed: response,
        });
    }
    async fastapproach_web(req, res) {
        const response = await this.allocationService.fastapproach_web();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of fast approach web claims ",
            fastapproach: response,
        });
    }
    async fastapproach_ivr(req, res) {
        const response = await this.allocationService.fastapproach_ivr();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of fast approach ivr claims ",
            fastapproach: response,
        });
    }
    async fastapproach_manual(req, res) {
        const response = await this.allocationService.fastapproach_manual();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of fast approach manual claims ",
            fastapproach: response,
        });
    }
    async twotouch_web(req, res) {
        const response = await this.allocationService.twotouch_web();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of two touch web claims ",
            twotouch: response,
        });
    }
    async twotouch_ivr(req, res) {
        const response = await this.allocationService.twotouch_ivr();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of two touch ivr claims ",
            twotouch: response,
        });
    }
    async twotouch_manual(req, res) {
        const response = await this.allocationService.twotouch_manual();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of two touch manual claims ",
            twotouch: response,
        });
    }
    async threetouch_web(req, res) {
        const response = await this.allocationService.threetouch_web();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of three touch web claims ",
            threetouch: response,
        });
    }
    async threetouch_ivr(req, res) {
        const response = await this.allocationService.threetouch_ivr();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of three touch ivr claims ",
            threetouch: response,
        });
    }
    async threetouch_manual(req, res) {
        const response = await this.allocationService.threetouch_manual();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of three touch manual claims ",
            threetouch: response,
        });
    }
    async fourormore_web(req, res) {
        const response = await this.allocationService.fourormore_web();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of four or more touch web claims ",
            fourormore: response,
        });
    }
    async fourormore_ivr(req, res) {
        const response = await this.allocationService.fourormore_ivr();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of four or more touch ivr claims ",
            fourormore: response,
        });
    }
    async fourormore_manual(req, res) {
        const response = await this.allocationService.fourormore_manual();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of four or more touch manual claims ",
            fourormore: response,
        });
    }
    async lessthan180daysclaims_web(req, res) {
        const response = await this.allocationService.lessthan180daysclaims_web();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of  less than 180 days web claims ",
            lessthan180days: response,
        });
    }
    async lessthan180daysclaims_ivr(req, res) {
        const response = await this.allocationService.lessthan180daysclaims_ivr();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of  less than 180 days ivr claims ",
            lessthan180days: response,
        });
    }
    async lessthan180daysclaims_manual(req, res) {
        const response = await this.allocationService.lessthan180daysclaims_manual();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of  less than 180 days manual claims ",
            lessthan180days: response,
        });
    }
    async lowfollowupclaims_web(req, res) {
        const response = await this.allocationService.lowfollowupclaims_web();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up web claims ",
            lowfollowup: response,
        });
    }
    async lowfollowupclaims_ivr(req, res) {
        const response = await this.allocationService.lowfollowupclaims_ivr();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up ivr claims ",
            lowfollowup: response,
        });
    }
    async lowfollowupclaims_manual(req, res) {
        const response = await this.allocationService.lowfollowupclaims_manual();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async lessthan30days_web(req, res) {
        const response = await this.allocationService.lessthan30days_web();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async lessthan30days_ivr(req, res) {
        const response = await this.allocationService.lessthan30days_ivr();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async lessthan30days_manual(req, res) {
        const response = await this.allocationService.lessthan30days_manual();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async morethan30days_web(req, res) {
        const response = await this.allocationService.morethan30days_web();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async morethan30days_ivr(req, res) {
        const response = await this.allocationService.morethan30days_ivr();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async morethan30days_manual(req, res) {
        const response = await this.allocationService.morethan30days_manual();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async morethan60days_web(req, res) {
        const response = await this.allocationService.morethan60days_web();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async morethan60days_ivr(req, res) {
        const response = await this.allocationService.morethan60days_ivr();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async morethan60days_manual(req, res) {
        const response = await this.allocationService.morethan60days_manual();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async lessthan90days_web(req, res) {
        const response = await this.allocationService.morethan90days_web();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async lessthan90days_ivr(req, res) {
        const response = await this.allocationService.morethan90days_ivr();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async lessthan90days_manual(req, res) {
        const response = await this.allocationService.morethan90days_manual();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async morethan90days_web(req, res) {
        const response = await this.allocationService.morethan180days_web();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async morethan180days_ivr(req, res) {
        const response = await this.allocationService.morethan180days_ivr();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async morethan180days_manual(req, res) {
        const response = await this.allocationService.morethan180days_manual();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async get_allocation_bucket(req, res) {
        const response = await this.allocationService.get_allocation_bucket(req.query.allocation_bucket, req.query.userid);
        return res.status(common_1.HttpStatus.OK).json({
            message: `sucessfully allocated to the userid ${req.query.userid}`,
            allocation_bucket: response,
        });
    }
    async get_allocationbucket(req, res) {
        const response = await this.allocationService.get_allocationbucket(req.query.allocation_bucket);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up manual claims ",
            lowfollowup: response,
        });
    }
    async tflexceed_Claims(req, res) {
        const response = await this.allocationService.tflexceed_Claims(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of tfl exceed web claims ",
            timeexceed: response,
        });
    }
    async fastapproach(req, res) {
        const response = await this.allocationService.fastapproach(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of fast approach web claims ",
            fastapproach: response,
        });
    }
    async twotouch(req, res) {
        const response = await this.allocationService.twotouch(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of two touch web claims ",
            twotouch: response,
        });
    }
    async threetouch(req, res) {
        const response = await this.allocationService.threetouch(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of three touch web claims ",
            threetouch: response,
        });
    }
    async fourormore(req, res) {
        const response = await this.allocationService.fourormore(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of four or more touch web claims ",
            fourormore: response,
        });
    }
    async lessthan180daysclaims(req, res) {
        const response = await this.allocationService.lessthan180daysclaims(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of  less than 180 days web claims ",
            lessthan180days: response,
        });
    }
    async lowfollowupclaims(req, res) {
        const response = await this.allocationService.lowfollowupclaims(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of low follow-up web claims ",
            lowfollowup: response,
        });
    }
    async morethan30daysclaims(req, res) {
        const response = await this.allocationService.morethan30daysclaims(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of morethan30days claims ",
            morethan30daysclaims: response,
        });
    }
    async lessthan30daysclaims(req, res) {
        const response = await this.allocationService.lessthan30daysclaims(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of lesstha30days  claims ",
            lessthan30daysclaims: response,
        });
    }
    async morethan60daysclaims(req, res) {
        const response = await this.allocationService.morethan60daysclaims(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of morethan60days claims ",
            morethan60daysclaims: response,
        });
    }
    async lessthan90daysclaims(req, res) {
        const response = await this.allocationService.lessthan90daysclaims(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of lessthan90days claims ",
            morethan60daysclaims: response,
        });
    }
};
__decorate([
    common_1.Get("bucket/count"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "bucketcount", null);
__decorate([
    common_1.Get("bucket/tflexceed/web"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "tflexceed_webClaims", null);
__decorate([
    common_1.Get("bucket/tflexceed/ivr"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "tflexceed_ivrClaims", null);
__decorate([
    common_1.Get("bucket/tflexceed/manual"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "tflexceed_manualClaims", null);
__decorate([
    common_1.Get("bucket/fastapproach/web"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "fastapproach_web", null);
__decorate([
    common_1.Get("bucket/fastapproach/ivr"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "fastapproach_ivr", null);
__decorate([
    common_1.Get("bucket/fastapproach/manual"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "fastapproach_manual", null);
__decorate([
    common_1.Get("bucket/twotouch/web"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "twotouch_web", null);
__decorate([
    common_1.Get("bucket/twotouch/ivr"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "twotouch_ivr", null);
__decorate([
    common_1.Get("bucket/twotouch/manual"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "twotouch_manual", null);
__decorate([
    common_1.Get("bucket/threetouch/web"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "threetouch_web", null);
__decorate([
    common_1.Get("bucket/threetouch/ivr"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "threetouch_ivr", null);
__decorate([
    common_1.Get("bucket/threetouch/manual"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "threetouch_manual", null);
__decorate([
    common_1.Get("bucket/fourormore/web"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "fourormore_web", null);
__decorate([
    common_1.Get("bucket/fourormore/ivr"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "fourormore_ivr", null);
__decorate([
    common_1.Get("bucket/fourormore/manual"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "fourormore_manual", null);
__decorate([
    common_1.Get("bucket/lessthan180days/web"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "lessthan180daysclaims_web", null);
__decorate([
    common_1.Get("bucket/lessthan180days/ivr"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "lessthan180daysclaims_ivr", null);
__decorate([
    common_1.Get("bucket/lessthan180days/manual"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "lessthan180daysclaims_manual", null);
__decorate([
    common_1.Get("bucket/lowfollowup/web"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "lowfollowupclaims_web", null);
__decorate([
    common_1.Get("bucket/lowfollowup/ivr"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "lowfollowupclaims_ivr", null);
__decorate([
    common_1.Get("bucket/lowfollowup/manual"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "lowfollowupclaims_manual", null);
__decorate([
    common_1.Get("bucket/lessthan30days/web"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "lessthan30days_web", null);
__decorate([
    common_1.Get("bucket/lessthan30days/ivr"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "lessthan30days_ivr", null);
__decorate([
    common_1.Get("bucket/lessthan30days/manual"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "lessthan30days_manual", null);
__decorate([
    common_1.Get("bucket/morethan30days/web"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "morethan30days_web", null);
__decorate([
    common_1.Get("bucket/morethan30days/ivr"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "morethan30days_ivr", null);
__decorate([
    common_1.Get("bucket/morethan30days/manual"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "morethan30days_manual", null);
__decorate([
    common_1.Get("bucket/morethan60days/web"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "morethan60days_web", null);
__decorate([
    common_1.Get("bucket/morethan60days/ivr"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "morethan60days_ivr", null);
__decorate([
    common_1.Get("bucket/morethan60days/manual"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "morethan60days_manual", null);
__decorate([
    common_1.Get("bucket/morethan90days/web"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "lessthan90days_web", null);
__decorate([
    common_1.Get("bucket/morethan90days/ivr"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "lessthan90days_ivr", null);
__decorate([
    common_1.Get("bucket/morethan90days/manual"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "lessthan90days_manual", null);
__decorate([
    common_1.Get("bucket/morethan180days/web"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "morethan90days_web", null);
__decorate([
    common_1.Get("bucket/morethan180days/ivr"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "morethan180days_ivr", null);
__decorate([
    common_1.Get("bucket/morethan180days/manual"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "morethan180days_manual", null);
__decorate([
    common_1.Put("bucketallocate"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "get_allocation_bucket", null);
__decorate([
    common_1.Get("claim"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "get_allocationbucket", null);
__decorate([
    common_1.Post("bucket/tflexceed"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "tflexceed_Claims", null);
__decorate([
    common_1.Post("bucket/fastapproach"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "fastapproach", null);
__decorate([
    common_1.Post("bucket/twotouch"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "twotouch", null);
__decorate([
    common_1.Post("bucket/threetouch"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "threetouch", null);
__decorate([
    common_1.Post("bucket/fourormore"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "fourormore", null);
__decorate([
    common_1.Post("bucket/lessthan180days"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "lessthan180daysclaims", null);
__decorate([
    common_1.Post("bucket/lowfollowup"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "lowfollowupclaims", null);
__decorate([
    common_1.Post("bucket/morethan30days"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "morethan30daysclaims", null);
__decorate([
    common_1.Post("bucket/lessthan30days"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "lessthan30daysclaims", null);
__decorate([
    common_1.Post("bucket/morethan60days"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "morethan60daysclaims", null);
__decorate([
    common_1.Post("bucket/lessthan90days"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AllocationController.prototype, "lessthan90daysclaims", null);
AllocationController = __decorate([
    common_1.Controller("allocation"),
    __metadata("design:paramtypes", [allocation_service_1.AllocationService])
], AllocationController);
exports.AllocationController = AllocationController;
//# sourceMappingURL=allocation.controller.js.map