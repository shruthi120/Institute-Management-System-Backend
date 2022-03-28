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
exports.BillingproviderController = void 0;
const common_1 = require("@nestjs/common");
const billingprovider_service_1 = require("./billingprovider.service");
const jwt_access_guard_1 = require("../../auth/jwt-access-guard");
let BillingproviderController = class BillingproviderController {
    constructor(billingproviderService) {
        this.billingproviderService = billingproviderService;
    }
    async create_billingprovider(req, res) {
        const response = await this.billingproviderService.create_billingprovider(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Billing Provider created successfully!',
            billingprovider: response,
        });
    }
    async get_all_billingprovider(res) {
        const response = await this.billingproviderService.get_all_billingprovider();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of available billingprovider',
            billingprovider: response,
        });
    }
    async update_billingprovider(req, res) {
        const response = await this.billingproviderService.update_billingprovider(req.params.id, req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Billingprovider updated!',
            billingprovider: response,
        });
    }
    async delete_billingprovider(req, res) {
        const response = await this.billingproviderService.delete_billingprovider(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Billingprovider deleted!',
            billingprovider: response,
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
], BillingproviderController.prototype, "create_billingprovider", null);
__decorate([
    common_1.Get('all'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BillingproviderController.prototype, "get_all_billingprovider", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BillingproviderController.prototype, "update_billingprovider", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BillingproviderController.prototype, "delete_billingprovider", null);
BillingproviderController = __decorate([
    common_1.Controller('billingprovider'),
    __metadata("design:paramtypes", [billingprovider_service_1.BillingproviderService])
], BillingproviderController);
exports.BillingproviderController = BillingproviderController;
//# sourceMappingURL=billingprovider.controller.js.map