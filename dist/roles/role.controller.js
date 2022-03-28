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
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const role_service_1 = require("./role.service");
const jwt_access_guard_1 = require("../auth/jwt-access-guard");
let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    async create_role(req, res) {
        const response = await this.roleService.create_role(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'role created successfully!',
            role: response,
        });
    }
    async get_all_role(res) {
        const response = await this.roleService.get_all_role();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of available role',
            role: response,
        });
    }
    async update_role(req, res) {
        const response = await this.roleService.update_role(req.params.id, req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'role updated!',
            role: response,
        });
    }
    async delete_role(req, res) {
        const response = await this.roleService.delete_role(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'role deleted!',
            role: response,
        });
    }
};
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "create_role", null);
__decorate([
    common_1.Get('all'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "get_all_role", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "update_role", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "delete_role", null);
RoleController = __decorate([
    common_1.Controller('role'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=role.controller.js.map