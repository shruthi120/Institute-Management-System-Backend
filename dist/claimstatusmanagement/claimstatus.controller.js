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
exports.ClaimStatusController = void 0;
const common_1 = require("@nestjs/common");
const claimstatus_service_1 = require("./claimstatus.service");
const jwt_access_guard_1 = require("../auth/jwt-access-guard");
let ClaimStatusController = class ClaimStatusController {
    constructor(ClaimStatusService) {
        this.ClaimStatusService = ClaimStatusService;
    }
    async group_helper(response, defaultdata) {
        for (let item of defaultdata) {
            if (!exist(item, response)) {
                const val = structure(item);
                response.push(val);
            }
        }
        function exist(item, response) {
            return response.some(function (el) {
                return el._id === item;
            });
        }
        function structure(name) {
            return {
                _id: name,
                totalcount: 0,
                totalamount: 0,
            };
        }
        function sorting(a, b) {
            if (a._id < b._id) {
                return -1;
            }
            if (a._id > b._id) {
                return 1;
            }
            return 0;
        }
        response.sort(sorting);
        return response;
    }
    async claim_status_category(req, res) {
        const response = await this.ClaimStatusService.get_category_value();
        const category = [
            "Acknowledgement",
            "Data Reporting Acknowledgements",
            "pending",
            "Finalized",
            "Request",
            "error",
            "Searches"
        ];
        const finalresponse = await this.group_helper(response, category);
        return res.status(common_1.HttpStatus.OK).json({
            message: "claim status category value",
            data: finalresponse,
        });
    }
    async subcategory_denial(req, res) {
        if (req.query.ClaimCategory == 'Acknowledgement') {
            const response = await this.ClaimStatusService.get_subcategory_value(req.query);
            const subcategory = [
                "A0",
                "A1",
                "A2",
                "A3",
                "A4",
                "A5",
                "A6",
                "A7",
                "A8"
            ];
            const finalresponse = await this.group_helper(response, subcategory);
            return res.status(common_1.HttpStatus.OK).json({
                message: "claim status subcategory value",
                data: finalresponse,
            });
        }
        else if (req.query.ClaimCategory == 'Data Reporting Acknowledgements') {
            const response = await this.ClaimStatusService.get_subcategory_value(req.query);
            const subcategory = [
                "DR01",
                "DR02",
                "DR03",
                "DR04",
                "DR05",
                "DR06",
                "DR07",
                "DR08",
            ];
            const finalresponse = await this.group_helper(response, subcategory);
            return res.status(common_1.HttpStatus.OK).json({
                message: "claim status subcategory value",
                data: finalresponse,
            });
        }
        else if (req.query.ClaimCategory == 'pending') {
            const response = await this.ClaimStatusService.get_subcategory_value(req.query);
            const subcategory = [
                "P0",
                "P1",
                "P2",
                "P3",
                "P4",
                "P5",
            ];
            const finalresponse = await this.group_helper(response, subcategory);
            return res.status(common_1.HttpStatus.OK).json({
                message: "claim status subcategory value",
                data: finalresponse,
            });
        }
        else if (req.query.ClaimCategory == 'Finalized') {
            const response = await this.ClaimStatusService.get_subcategory_value(req.query);
            const subcategory = [
                "F0",
                "F1",
                "F3",
                "F3F",
                "F3N",
                "F4"
            ];
            const finalresponse = await this.group_helper(response, subcategory);
            return res.status(common_1.HttpStatus.OK).json({
                message: "claim status subcategory value",
                data: finalresponse,
            });
        }
        else if (req.query.ClaimCategory == 'Request') {
            const response = await this.ClaimStatusService.get_subcategory_value(req.query);
            const subcategory = [
                "R0",
                "R1",
                "R3",
                "R4",
                "R5",
                "R6",
                "R7",
                "R8",
                "R9",
                "R10",
                "R11",
                "R12",
                "R13",
                "R14",
                "R15",
                "R16",
                "R17"
            ];
            const finalresponse = await this.group_helper(response, subcategory);
            return res.status(common_1.HttpStatus.OK).json({
                message: "claim status subcategory value",
                data: finalresponse,
            });
        }
        else if (req.query.ClaimCategory == 'error') {
            const response = await this.ClaimStatusService.get_subcategory_value(req.query);
            const subcategory = [
                "E0",
                "E1",
                "E2",
                "E3",
                "E4"
            ];
            const finalresponse = await this.group_helper(response, subcategory);
            return res.status(common_1.HttpStatus.OK).json({
                message: "claim status subcategory value",
                data: finalresponse,
            });
        }
        else if (req.query.ClaimCategory == 'Searches') {
            const response = await this.ClaimStatusService.get_subcategory_value(req.query);
            const subcategory = [
                "D0"
            ];
            const finalresponse = await this.group_helper(response, subcategory);
            return res.status(common_1.HttpStatus.OK).json({
                message: "claim status subcategory value",
                data: finalresponse,
            });
        }
    }
    async get_claimsubcategory_claims(req, res) {
        const response = await this.ClaimStatusService.get_subcategory_claims(req.query);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of claims in given query",
            claims: response,
        });
    }
};
__decorate([
    common_1.Get("claimcategory"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimStatusController.prototype, "claim_status_category", null);
__decorate([
    common_1.Get("subcategory"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimStatusController.prototype, "subcategory_denial", null);
__decorate([
    common_1.Get("claimsubcategory/claims"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimStatusController.prototype, "get_claimsubcategory_claims", null);
ClaimStatusController = __decorate([
    common_1.Controller("claimstatus"),
    __metadata("design:paramtypes", [claimstatus_service_1.ClaimStatusService])
], ClaimStatusController);
exports.ClaimStatusController = ClaimStatusController;
//# sourceMappingURL=claimstatus.controller.js.map