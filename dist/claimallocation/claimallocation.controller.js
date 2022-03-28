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
exports.ClaimallocationController = void 0;
const common_1 = require("@nestjs/common");
const claimallocation_service_1 = require("./claimallocation.service");
const jwt_access_guard_1 = require("../auth/jwt-access-guard");
let ClaimallocationController = class ClaimallocationController {
    constructor(claimallocationService) {
        this.claimallocationService = claimallocationService;
    }
    async allocate(req, res) {
        const response = await this.claimallocationService.filter_claims(req.query);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of claims in given query",
            claims: response,
        });
    }
    async claimallocation(req, res) {
        const response = await this.claimallocationService.allocate_claims(req.body.ids, req);
        return res.status(common_1.HttpStatus.OK).json({
            message: `sucessfully allocated to the userid ${req.params.id}`,
            claims: response,
        });
    }
    async unallocate(req, res) {
        const response = await this.claimallocationService.unallocatedclaims();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of claims to be unallocate",
            claims: response,
        });
    }
    async alreadyallocated(req, res) {
        const response = await this.claimallocationService.allocated();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of claims that are allocate",
            claims: response,
        });
    }
    async multiclaimallocation(req, res) {
        const response = await this.claimallocationService.multipleuser_allocate_claims(req.body.claimids, req.query);
        return res.status(common_1.HttpStatus.OK).json({
            message: `sucessfully allocated to the given users`
        });
    }
    async advanced_search_filter_data(req, res) {
        const response = await this.claimallocationService.advanced_search_filter_data(req.query);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of claims in given query",
            claims: response,
        });
    }
};
__decorate([
    common_1.Get("filter"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimallocationController.prototype, "allocate", null);
__decorate([
    common_1.Put("allocate/:id"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimallocationController.prototype, "claimallocation", null);
__decorate([
    common_1.Get("all"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimallocationController.prototype, "unallocate", null);
__decorate([
    common_1.Get("allocated/all"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimallocationController.prototype, "alreadyallocated", null);
__decorate([
    common_1.Put("allocatemultipleuser"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimallocationController.prototype, "multiclaimallocation", null);
__decorate([
    common_1.Get("advancedfilter"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimallocationController.prototype, "advanced_search_filter_data", null);
ClaimallocationController = __decorate([
    common_1.Controller("allocation"),
    __metadata("design:paramtypes", [claimallocation_service_1.ClaimallocationService])
], ClaimallocationController);
exports.ClaimallocationController = ClaimallocationController;
//# sourceMappingURL=claimallocation.controller.js.map