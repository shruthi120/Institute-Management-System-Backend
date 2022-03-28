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
exports.TrendController = void 0;
const common_1 = require("@nestjs/common");
const trends_service_1 = require("./trends.service");
const jwt_access_guard_1 = require("../auth/jwt-access-guard");
let TrendController = class TrendController {
    constructor(trendService) {
        this.trendService = trendService;
    }
    async get_by_cpts(req, res) {
        const response = await this.trendService.get_by_topcpt();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of top cpts',
            data: response,
        });
    }
    async get_by_payer(req, res) {
        const response = await this.trendService.get_by_toppayer();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of top payer balance',
            data: response,
        });
    }
    async get_by_toppatient(req, res) {
        const response = await this.trendService.get_by_toppatient();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of top patient balance',
            data: response,
        });
    }
};
__decorate([
    common_1.Get('topcpts'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TrendController.prototype, "get_by_cpts", null);
__decorate([
    common_1.Get('toppayerbalance'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TrendController.prototype, "get_by_payer", null);
__decorate([
    common_1.Get('toppatientbalance'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TrendController.prototype, "get_by_toppatient", null);
TrendController = __decorate([
    common_1.Controller('trends'),
    __metadata("design:paramtypes", [trends_service_1.TrendService])
], TrendController);
exports.TrendController = TrendController;
//# sourceMappingURL=trends.controller.js.map