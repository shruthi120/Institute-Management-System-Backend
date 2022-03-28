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
exports.ClaimController = void 0;
const common_1 = require("@nestjs/common");
const claim_service_1 = require("./claim.service");
const jwt_access_guard_1 = require("../auth/jwt-access-guard");
let ClaimController = class ClaimController {
    constructor(claimService) {
        this.claimService = claimService;
    }
    async update_claimchange(req, res) {
        const response = await this.claimService.update_claimchange(req.params.id, req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Claim updated successfully!",
            Claim: response,
        });
    }
    async managepaymentUpdate(req, res) {
        const response = await this.claimService.managepaymentUpdate(req.query.claimid, req.body, req.query.cptcode);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Claim updated successfully!",
            Claim: response,
        });
    }
    async get_by_claimId(req, res) {
        const response = await this.claimService.get_by_claimId(req.query.claimid);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of matched Claim ID",
            Claim: response,
        });
    }
    async addcpt(req, res) {
        const response = await this.claimService.addcpt(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Cpt added successfully!",
            addcpt: response,
        });
    }
    async getall(req, res) {
        const response = await this.claimService.getallclaim();
        return res.status(common_1.HttpStatus.OK).json({
            message: "list of all the claims ",
            Claims: response,
        });
    }
    async getextra(req, res) {
        const response = await this.claimService.getextradetails();
        return res.status(common_1.HttpStatus.OK).json({
            message: "list of all  claims with extra fields ",
            extradetails: response,
        });
    }
};
__decorate([
    common_1.Put("updateclaim/:id"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimController.prototype, "update_claimchange", null);
__decorate([
    common_1.Put("update"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimController.prototype, "managepaymentUpdate", null);
__decorate([
    common_1.Get("viewclaim"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimController.prototype, "get_by_claimId", null);
__decorate([
    common_1.Post("addcpt"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimController.prototype, "addcpt", null);
__decorate([
    common_1.Get("all"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimController.prototype, "getall", null);
__decorate([
    common_1.Get("Extra"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimController.prototype, "getextra", null);
ClaimController = __decorate([
    common_1.Controller("claim"),
    __metadata("design:paramtypes", [claim_service_1.ClaimService])
], ClaimController);
exports.ClaimController = ClaimController;
//# sourceMappingURL=claim.controller.js.map