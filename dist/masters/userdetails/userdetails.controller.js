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
exports.UserdetailsController = void 0;
const common_1 = require("@nestjs/common");
const userdetails_service_1 = require("./userdetails.service");
const jwt_access_guard_1 = require("../../auth/jwt-access-guard");
let UserdetailsController = class UserdetailsController {
    constructor(userdetailsService) {
        this.userdetailsService = userdetailsService;
    }
    async create_userdetails(req, res) {
        const response = await this.userdetailsService.create_userdetails(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Userdetails created successfully!',
            user: response,
        });
    }
    async get_all_userdetails(res) {
        const response = await this.userdetailsService.get_all_userdetails();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of available userdetails',
            user: response,
        });
    }
    async update_userdetails(req, res) {
        const response = await this.userdetailsService.update_userdetails(req.params.id, req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Userdetails updated!',
            user: response,
        });
    }
    async delete_userdetails(req, res) {
        const response = await this.userdetailsService.delete_userdetails(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Userdetails deleted!',
            user: response,
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
], UserdetailsController.prototype, "create_userdetails", null);
__decorate([
    common_1.Get('all'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserdetailsController.prototype, "get_all_userdetails", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserdetailsController.prototype, "update_userdetails", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserdetailsController.prototype, "delete_userdetails", null);
UserdetailsController = __decorate([
    common_1.Controller('userdetails'),
    __metadata("design:paramtypes", [userdetails_service_1.UserdetailsService])
], UserdetailsController);
exports.UserdetailsController = UserdetailsController;
//# sourceMappingURL=userdetails.controller.js.map