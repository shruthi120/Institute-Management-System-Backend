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
exports.EligibilityController = void 0;
const common_1 = require("@nestjs/common");
const eligibility_service_1 = require("./eligibility.service");
const XLSX = require("xlsx");
let EligibilityController = class EligibilityController {
    constructor(eligibilityService) {
        this.eligibilityService = eligibilityService;
    }
    async geteligibilityreport(req, res) {
        await this.eligibilityService.eligibilityreport(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "claims records inserted successfully",
        });
    }
};
__decorate([
    common_1.Post("report"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EligibilityController.prototype, "geteligibilityreport", null);
EligibilityController = __decorate([
    common_1.Controller("eligibility"),
    __metadata("design:paramtypes", [eligibility_service_1.Eligibilityservice])
], EligibilityController);
exports.EligibilityController = EligibilityController;
//# sourceMappingURL=eligibility.controller.js.map