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
exports.PayerController = void 0;
const common_1 = require("@nestjs/common");
const jwt_access_guard_1 = require("../auth/jwt-access-guard");
const payer_service_1 = require("./payer.service");
let PayerController = class PayerController {
    constructor(payerService) {
        this.payerService = payerService;
    }
    async create_pcategory(req, res) {
        const response = await this.payerService.create_pcategory(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Payer category Added successfully!',
            payer: response,
        });
    }
    async get_pcategory(res) {
        const response = await this.payerService.get_pcategory();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of all available Payer categories',
            payers: response,
        });
    }
    async update_pcategory(req, res) {
        const response = await this.payerService.update_pcategory(req.params.id, req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Payer category Updated',
            payer: response,
        });
    }
    async delete_pcategory(req, res) {
        const response = await this.payerService.delete_pcategory(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Payer category Deleted',
            payer: response,
        });
    }
    async create_pmaster(req, res) {
        const response = await this.payerService.create_pmaster(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Payer master Added successfully!',
            payer: response,
        });
    }
    async get_pmaster(res) {
        const response = await this.payerService.get_pmaster();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of all available Payer masters',
            payers: response,
        });
    }
    async update_pmaster(req, res) {
        const response = await this.payerService.update_pmaster(req.params.id, req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Payer master Updated',
            payer: response,
        });
    }
    async delete_pmaster(req, res) {
        const response = await this.payerService.delete_pmaster(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Payer master Deleted',
            payer: response,
        });
    }
};
__decorate([
    common_1.Post('category'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "create_pcategory", null);
__decorate([
    common_1.Get('all'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "get_pcategory", null);
__decorate([
    common_1.Put('update/:id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "update_pcategory", null);
__decorate([
    common_1.Delete('category/:id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "delete_pcategory", null);
__decorate([
    common_1.Post('master'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "create_pmaster", null);
__decorate([
    common_1.Get('master/all'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "get_pmaster", null);
__decorate([
    common_1.Put('update/:id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "update_pmaster", null);
__decorate([
    common_1.Delete('category/:id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "delete_pmaster", null);
PayerController = __decorate([
    common_1.Controller('payer'),
    __metadata("design:paramtypes", [payer_service_1.PayerService])
], PayerController);
exports.PayerController = PayerController;
//# sourceMappingURL=payer.controller.js.map