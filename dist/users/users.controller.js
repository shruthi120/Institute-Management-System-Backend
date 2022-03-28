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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const jwt_access_guard_1 = require("../auth/jwt-access-guard");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create_userfirst(req, res) {
        const response = await this.usersService.create_userfirst(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: response,
        });
    }
    async create_user(req, res) {
        const response = await this.usersService.create_user(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "user created successfully",
            user: response,
        });
    }
    async get_all_users(req, res) {
        const response = await this.usersService.get_all_users();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of all users",
            user: response,
        });
    }
    async update_user(req, res) {
        const response = await this.usersService.update_user(req.params.id, req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "User Updated",
            user: response,
        });
    }
    async delete_user(req, res) {
        const response = await this.usersService.delete_user(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: "User Deleted",
            user: response,
        });
    }
    async get_users_by_name_and_role(req, res) {
        const response = await this.usersService.get_firstname_and_role(req.query);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of users in the given name and role",
            user: response,
        });
    }
};
__decorate([
    common_1.Post("create"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create_userfirst", null);
__decorate([
    common_1.Post("create/user"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create_user", null);
__decorate([
    common_1.Get("all"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "get_all_users", null);
__decorate([
    common_1.Put(":id"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update_user", null);
__decorate([
    common_1.Delete(":id"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete_user", null);
__decorate([
    common_1.Get("filter"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "get_users_by_name_and_role", null);
UsersController = __decorate([
    common_1.Controller("users"),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map