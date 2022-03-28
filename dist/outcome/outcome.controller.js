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
exports.OutcomeController = void 0;
const common_1 = require("@nestjs/common");
const outcome_service_1 = require("./outcome.service");
const jwt_access_guard_1 = require("../auth/jwt-access-guard");
let OutcomeController = class OutcomeController {
    constructor(outcomeService) {
        this.outcomeService = outcomeService;
    }
    async group_helper(response, _id) {
        let finalresponse = [];
        for (let item of _id) {
            if (!exist(item, response)) {
                const val = addagestructure(item);
                finalresponse.push(val);
            }
            else {
                const val = response.filter((obj) => {
                    return obj._id === item;
                });
                finalresponse.push(val[0]);
            }
        }
        function exist(item, response) {
            return response.some(function (el) {
                return el._id === item;
            });
        }
        function addagestructure(grp) {
            return {
                _id: grp,
                totalamount: 0,
                totalcount: 0,
            };
        }
        return finalresponse;
    }
    async getall(req, res) {
        const response = await this.outcomeService.getall();
        const _id = [
            "0-10days",
            "11-30days",
            "31-60days",
            "61-90days",
            "91-120days",
            "121-180days",
            "181-365days",
        ];
        const finalresponse = await this.group_helper(response[4], _id);
        const value = {
            appealsuccess: response[0],
            denialbytfl: response[1],
            zeropaid: response[2],
            partialpaid: response[3],
            denialbyagewise: finalresponse,
            touchwise: response[5],
        };
        return res.status(common_1.HttpStatus.OK).json({
            message: "response from Outcome",
            outcome: value,
        });
    }
    async account_receivables(req, res) {
        const response = await this.outcomeService.account_receivables();
        return res.status(common_1.HttpStatus.OK).json({
            message: "Percent of account receivables over 90days,120 days and 1year",
            account_receivables: response,
        });
    }
    async percent_of_appealondenial(req, res) {
        const response = await this.outcomeService.percent_of_appealondenial();
        return res.status(common_1.HttpStatus.OK).json({
            message: "Percent of appealed claims on denial",
            appealondenial: response,
        });
    }
    async get_actionwise(req, res) {
        const response = await this.outcomeService.get_actionwise();
        const value = {
            denied: response[0],
            paid: response[1],
            nis: response[2],
            acknowledgement: response[3],
            pending: response[4],
            finalized: response[5],
            request: response[6],
            error: response[7],
            searches: response[8],
        };
        return res.status(common_1.HttpStatus.OK).json({
            message: "Get  total claims and total amount",
            action_wise: response,
        });
    }
    async get_payerclasswise(req, res) {
        const response = await this.outcomeService.get_payerclasswise();
        const value = {
            denied: response[0],
            paid: response[1],
            nis: response[2],
        };
        return res.status(common_1.HttpStatus.OK).json({
            message: "Get  total claims and total amount",
            payerclass_wise: response,
        });
    }
    async get_agewise(req, res) {
        const response = await this.outcomeService.get_agewise();
        const value = {
            denied: response[0],
            paid: response[1],
            nis: response[2],
        };
        return res.status(common_1.HttpStatus.OK).json({
            message: "Get  total claims and total amount",
            age_wise: response,
        });
    }
    async get_payerwise(req, res) {
        const response = await this.outcomeService.get_payerwise();
        const value = {
            denied: response[0],
            paid: response[1],
            nis: response[2],
        };
        return res.status(common_1.HttpStatus.OK).json({
            message: "Get  total claims and total amount",
            payer_wise: response,
        });
    }
    async get_cptwise(req, res) {
        const response = await this.outcomeService.get_cptwise();
        const value = {
            denied: response[0],
            paid: response[1],
            nis: response[2],
        };
        return res.status(common_1.HttpStatus.OK).json({
            message: "Get  total claims and total amount",
            cpt_wise: response,
        });
    }
    async get_departmentwise(req, res) {
        const response = await this.outcomeService.get_departmentwise();
        return res.status(common_1.HttpStatus.OK).json({
            message: "Get  total claims and total amount",
            department_wise: response,
        });
    }
    async get_typewise(req, res) {
        const response = await this.outcomeService.get_typewise();
        return res.status(common_1.HttpStatus.OK).json({
            message: "Get  total claims and total amount",
            department_wise: response,
        });
    }
    async get_topdenialreason(req, res) {
        const response = await this.outcomeService.get_topdenialreason();
        return res.status(common_1.HttpStatus.OK).json({
            message: "Get  total claims and total amount",
            department_wise: response,
        });
    }
};
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OutcomeController.prototype, "getall", null);
__decorate([
    common_1.Get("ar"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OutcomeController.prototype, "account_receivables", null);
__decorate([
    common_1.Get("appealondenial"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OutcomeController.prototype, "percent_of_appealondenial", null);
__decorate([
    common_1.Get("actionwise"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OutcomeController.prototype, "get_actionwise", null);
__decorate([
    common_1.Get("payerclasswise"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OutcomeController.prototype, "get_payerclasswise", null);
__decorate([
    common_1.Get("agewise"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OutcomeController.prototype, "get_agewise", null);
__decorate([
    common_1.Get("payerwise"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OutcomeController.prototype, "get_payerwise", null);
__decorate([
    common_1.Get("cptwise"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OutcomeController.prototype, "get_cptwise", null);
__decorate([
    common_1.Get("departmentwise"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OutcomeController.prototype, "get_departmentwise", null);
__decorate([
    common_1.Get("typewise"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OutcomeController.prototype, "get_typewise", null);
__decorate([
    common_1.Get("topdenialreason"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OutcomeController.prototype, "get_topdenialreason", null);
OutcomeController = __decorate([
    common_1.Controller("outcome"),
    __metadata("design:paramtypes", [outcome_service_1.OutcomeService])
], OutcomeController);
exports.OutcomeController = OutcomeController;
//# sourceMappingURL=outcome.controller.js.map