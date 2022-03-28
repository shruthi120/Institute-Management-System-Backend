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
exports.UserclaimsController = void 0;
const common_1 = require("@nestjs/common");
const userclaims_service_1 = require("./userclaims.service");
const jwt_access_guard_1 = require("../auth/jwt-access-guard");
let UserclaimsController = class UserclaimsController {
    constructor(userclaimsService) {
        this.userclaimsService = userclaimsService;
    }
    async getuserdata(req, res) {
        const response = await this.userclaimsService.getclaimperuser(req.query.userid);
        return res.status(common_1.HttpStatus.OK).json({
            message: `the claims under user id ${req.query.userid} are`,
            Claims: response,
        });
    }
    async getuserdenial(req, res) {
        const response = await this.userclaimsService.getclaimdenied(req.query.userid);
        return res.status(common_1.HttpStatus.OK).json({
            message: `the claims under user id ${req.query.userid} are`,
            Claims: response,
        });
    }
    async getuserinprogress(req, res) {
        const response = await this.userclaimsService.getclaimprogress(req.query.userid);
        return res.status(common_1.HttpStatus.OK).json({
            message: `the claims under user id ${req.query.userid} are`,
            Claims: response,
        });
    }
    async getusercompleted(req, res) {
        const response = await this.userclaimsService.getclaimcomplete(req.query.userid);
        return res.status(common_1.HttpStatus.OK).json({
            message: `the claims under user id ${req.query.userid} are`,
            Claim: response,
        });
    }
    async get_by_toaction(req, res) {
        const response = await this.userclaimsService.get_by_filter(req.query.userid);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of matched Claim under user',
            totalclaimscount: response[0],
            denialclaimscount: response[1],
            inprogressclaimscount: response[2],
            completedclaimscount: response[3],
        });
    }
};
__decorate([
    common_1.Get("user"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserclaimsController.prototype, "getuserdata", null);
__decorate([
    common_1.Get("user/denialclaims"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserclaimsController.prototype, "getuserdenial", null);
__decorate([
    common_1.Get("user/inprogressclaims"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserclaimsController.prototype, "getuserinprogress", null);
__decorate([
    common_1.Get("user/completedclaims"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserclaimsController.prototype, "getusercompleted", null);
__decorate([
    common_1.Get('user/action/dashboard'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserclaimsController.prototype, "get_by_toaction", null);
UserclaimsController = __decorate([
    common_1.Controller('claim'),
    __metadata("design:paramtypes", [userclaims_service_1.UserclaimsService])
], UserclaimsController);
exports.UserclaimsController = UserclaimsController;
//# sourceMappingURL=userclaims.controller.js.map