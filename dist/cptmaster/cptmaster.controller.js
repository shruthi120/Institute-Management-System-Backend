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
exports.CptmasterController = void 0;
const common_1 = require("@nestjs/common");
const jwt_access_guard_1 = require("../auth/jwt-access-guard");
const cptmaster_service_1 = require("./cptmaster.service");
let CptmasterController = class CptmasterController {
    constructor(cptmasterService) {
        this.cptmasterService = cptmasterService;
    }
    async create_cptmaster(req, res) {
        const response = await this.cptmasterService.create_cptmaster(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'CPT master Added successfully!',
            cpt: response,
        });
    }
    async get_cptmaster(res) {
        const response = await this.cptmasterService.get_cptmaster();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of all available CPT masters',
            cpt: response,
        });
    }
    async update_cptmaster(req, res) {
        const response = await this.cptmasterService.update_cptmaster(req.params.id, req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Cpt master updated successfully!',
            cpt: response,
        });
    }
    async delete_cptmaster(req, res) {
        const response = await this.cptmasterService.delete_cptmaster(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Cpt master deleted successfully!',
            cpt: response,
        });
    }
    async get_unique_cptmaster(req, res) {
        const response = await this.cptmasterService.get_by_cptmaster_code(req.query.cptcode);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of  matched Cpt masters',
            cpt: response,
        });
    }
    async create_modifier(req, res) {
        const response = await this.cptmasterService.create_modifier(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Modifier master Added successfully!',
            modifier: response,
        });
    }
    async get_modifier(res) {
        const response = await this.cptmasterService.get_modifier();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of all available Modifier masters',
            modifier: response,
        });
    }
    async update_modifier(req, res) {
        const response = await this.cptmasterService.update_modifier(req.params.id, req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Modifier master updated successfully!',
            modifier: response,
        });
    }
    async delete_modifier(req, res) {
        const response = await this.cptmasterService.delete_modifier(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Modifier master deleted successfully!',
            modifier: response,
        });
    }
    async get_unique_modifier(req, res) {
        const response = await this.cptmasterService.get_by_modifiercode(req.query.code);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of matched  Modifier masters',
            modifier: response,
        });
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CptmasterController.prototype, "create_cptmaster", null);
__decorate([
    common_1.Get('all'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CptmasterController.prototype, "get_cptmaster", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CptmasterController.prototype, "update_cptmaster", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CptmasterController.prototype, "delete_cptmaster", null);
__decorate([
    common_1.Get('search'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CptmasterController.prototype, "get_unique_cptmaster", null);
__decorate([
    common_1.Post('modifier'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CptmasterController.prototype, "create_modifier", null);
__decorate([
    common_1.Get('modifier/all'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CptmasterController.prototype, "get_modifier", null);
__decorate([
    common_1.Put('modifier/:id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CptmasterController.prototype, "update_modifier", null);
__decorate([
    common_1.Delete('modifier/:id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CptmasterController.prototype, "delete_modifier", null);
__decorate([
    common_1.Get('modifier/search'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CptmasterController.prototype, "get_unique_modifier", null);
CptmasterController = __decorate([
    common_1.Controller('cptmaster'),
    __metadata("design:paramtypes", [cptmaster_service_1.CptmasterService])
], CptmasterController);
exports.CptmasterController = CptmasterController;
//# sourceMappingURL=cptmaster.controller.js.map