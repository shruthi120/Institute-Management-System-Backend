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
exports.AdvancebillingproviderController = void 0;
const common_1 = require("@nestjs/common");
const advancebillingprovider_service_1 = require("./advancebillingprovider.service");
const jwt_access_guard_1 = require("../../auth/jwt-access-guard");
let AdvancebillingproviderController = class AdvancebillingproviderController {
    constructor(advancebillingproviderService) {
        this.advancebillingproviderService = advancebillingproviderService;
    }
    async create_advancedbillingprovider(req, res) {
        const response = await this.advancebillingproviderService.create_advancedbillingprovider(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Advanced Billing Provider created successfully!',
            Advanced_billingprovider: response,
        });
    }
    async get_all_advancedbillingprovider(res) {
        const response = await this.advancebillingproviderService.get_all_advancedbillingprovider();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of available Advanced billingprovider',
            Advanced_billingprovider: response,
        });
    }
    async update_advancedbillingprovider(req, res) {
        const response = await this.advancebillingproviderService.update_advancedbillingprovider(req.params.id, req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Advanced billingprovider updated!',
            Advanced_billingprovider: response,
        });
    }
    async delete_advancedbillingprovider(req, res) {
        const response = await this.advancebillingproviderService.delete_advancedbillingprovider(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Advanced billingprovider deleted!',
            Advanced_billingprovider: response,
        });
    }
};
__decorate([
    common_1.Post('create'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdvancebillingproviderController.prototype, "create_advancedbillingprovider", null);
__decorate([
    common_1.Get('all'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdvancebillingproviderController.prototype, "get_all_advancedbillingprovider", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdvancebillingproviderController.prototype, "update_advancedbillingprovider", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdvancebillingproviderController.prototype, "delete_advancedbillingprovider", null);
AdvancebillingproviderController = __decorate([
    common_1.Controller('advancebillingprovider'),
    __metadata("design:paramtypes", [advancebillingprovider_service_1.AdvancebillingproviderService])
], AdvancebillingproviderController);
exports.AdvancebillingproviderController = AdvancebillingproviderController;
//# sourceMappingURL=advancebillingprovider.controller.js.map