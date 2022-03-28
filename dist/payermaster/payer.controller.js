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
    async create_payercategory(req, res) {
        const response = await this.payerService.create_payercategory(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Payer category Added successfully!',
            payer: response,
        });
    }
    async get_payercategory(res) {
        const response = await this.payerService.get_payercategory();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of all available Payer categories',
            payer: response,
        });
    }
    async get_unique_payercategory(req, res) {
        const response = await this.payerService.get_by_payercategory(req.query.category);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of matched Payer categories',
            payer: response,
        });
    }
    async update_payercategory(req, res) {
        const response = await this.payerService.update_payercategory(req.params.id, req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Payer category Updated',
            payer: response,
        });
    }
    async delete_payercategory(req, res) {
        const response = await this.payerService.delete_payercategory(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Payer category Deleted',
            payer: response,
        });
    }
    async create_payermaster(req, res) {
        const response = await this.payerService.create_payermaster(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Payer master Added successfully!',
            payer: response,
        });
    }
    async get_payermaster(res) {
        const response = await this.payerService.get_payermaster();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of all available Payer masters',
            payer: response,
        });
    }
    async get_unique_payermaster(req, res) {
        const response = await this.payerService.get_by_payermaster(req.query.payername);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of matched Payer masters',
            payer: response,
        });
    }
    async update_payermaster(req, res) {
        const response = await this.payerService.update_payermaster(req.params.id, req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Payer master Updated',
            payer: response,
        });
    }
    async delete_payermaster(req, res) {
        const response = await this.payerService.delete_payermaster(req.params.id);
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
], PayerController.prototype, "create_payercategory", null);
__decorate([
    common_1.Get('category/all'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "get_payercategory", null);
__decorate([
    common_1.Get('category/search'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "get_unique_payercategory", null);
__decorate([
    common_1.Put('category/:id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "update_payercategory", null);
__decorate([
    common_1.Delete('category/:id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "delete_payercategory", null);
__decorate([
    common_1.Post('master'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "create_payermaster", null);
__decorate([
    common_1.Get('master/all'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "get_payermaster", null);
__decorate([
    common_1.Get('master/search'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "get_unique_payermaster", null);
__decorate([
    common_1.Put('master/:id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "update_payermaster", null);
__decorate([
    common_1.Delete('master/:id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayerController.prototype, "delete_payermaster", null);
PayerController = __decorate([
    common_1.Controller('payer'),
    __metadata("design:paramtypes", [payer_service_1.PayerService])
], PayerController);
exports.PayerController = PayerController;
//# sourceMappingURL=payer.controller.js.map