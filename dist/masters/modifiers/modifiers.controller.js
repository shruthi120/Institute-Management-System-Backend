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
exports.ModifiersController = void 0;
const common_1 = require("@nestjs/common");
const jwt_access_guard_1 = require("../../auth/jwt-access-guard");
const modifiers_service_1 = require("./modifiers.service");
let ModifiersController = class ModifiersController {
    constructor(modifiersService) {
        this.modifiersService = modifiersService;
    }
    async create_modifier(req, res) {
        const response = await this.modifiersService.create_modifier(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Modifier master Added successfully!',
            modifier: response,
        });
    }
    async get_modifier(res) {
        const response = await this.modifiersService.get_modifier();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of all available Modifier masters',
            modifier: response,
        });
    }
    async update_modifier(req, res) {
        const response = await this.modifiersService.update_modifier(req.params.id, req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Modifier master updated successfully!',
            modifier: response,
        });
    }
    async delete_modifier(req, res) {
        const response = await this.modifiersService.delete_modifier(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Modifier master deleted successfully!',
            modifier: response,
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
], ModifiersController.prototype, "create_modifier", null);
__decorate([
    common_1.Get('all'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ModifiersController.prototype, "get_modifier", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ModifiersController.prototype, "update_modifier", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ModifiersController.prototype, "delete_modifier", null);
ModifiersController = __decorate([
    common_1.Controller('modifier'),
    __metadata("design:paramtypes", [modifiers_service_1.ModifiersService])
], ModifiersController);
exports.ModifiersController = ModifiersController;
//# sourceMappingURL=modifiers.controller.js.map