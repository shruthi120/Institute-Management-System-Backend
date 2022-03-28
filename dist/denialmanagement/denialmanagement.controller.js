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
exports.DenialmanagementController = void 0;
const common_1 = require("@nestjs/common");
const denialmanagement_service_1 = require("./denialmanagement.service");
const jwt_access_guard_1 = require("../auth/jwt-access-guard");
let DenialmanagementController = class DenialmanagementController {
    constructor(denialmanagementService) {
        this.denialmanagementService = denialmanagementService;
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
    async group_helper1(subcategory, agegrp, response) {
        let finalresponse = [];
        let ageresponse = [];
        for (let item of subcategory) {
            if (!exist(item, response)) {
                const val = structure(item);
                finalresponse.push(val);
            }
            else {
                const val = response.filter((obj) => { return obj._id === item; });
                console.log("in", val[0]);
                for (let age of agegrp) {
                    if (!existagegrp(age, val[0].subcategoryagewise)) {
                        const data = addagestructure(age);
                        ageresponse.push(data);
                    }
                    else {
                        const data = val[0].subcategoryagewise.filter((obj) => { return obj.agegrp === age; });
                        ageresponse.push(data[0]);
                    }
                }
                val[0].subcategoryagewise = ageresponse;
                finalresponse.push(val[0]);
                ageresponse = [];
            }
        }
        function exist(item, response) {
            return response.some(function (el) {
                return el._id === item;
            });
        }
        function existagegrp(item, response) {
            return response.some(function (el) {
                return el.agegrp === item;
            });
        }
        function addagestructure(grp) {
            return {
                agegrp: grp,
                totalamount: 0,
                totalcount: 0,
            };
        }
        function structure(name) {
            return {
                _id: name,
                subcategoryagewise: [
                    {
                        agegrp: "0-10days",
                        totalamount: 0,
                        totalcount: 0,
                    },
                    {
                        agegrp: "11-30days",
                        totalamount: 0,
                        totalcount: 0,
                    },
                    {
                        agegrp: "31-60days",
                        totalamount: 0,
                        totalcount: 0,
                    },
                    {
                        agegrp: "61-90days",
                        totalamount: 0,
                        totalcount: 0,
                    },
                    {
                        agegrp: "91-120days",
                        totalamount: 0,
                        totalcount: 0,
                    },
                    {
                        agegrp: "121-180days",
                        totalamount: 0,
                        totalcount: 0,
                    },
                    {
                        agegrp: "181-365days",
                        totalamount: 0,
                        totalcount: 0,
                    },
                ],
                grandtotal: 0
            };
        }
        return finalresponse;
    }
    async denied(req, res) {
        const response = await this.denialmanagementService.get_overall_value();
        const defaultdata = [1, 2, 3, 4];
        const finalresponse = await this.group_helper(response[0], defaultdata);
        const value = {
            eachsplitup: finalresponse,
            morethanfour: response[1],
            overallvalue: response[2],
        };
        return res.status(common_1.HttpStatus.OK).json({
            message: "overall denial value",
            data: value,
        });
    }
    async category_denial(req, res) {
        const response = await this.denialmanagementService.get_category_value(req.query);
        const category = [
            "Eligibility Issue",
            "Authorization",
            "TFL Issue",
            "Calling/Web Portal",
            "Coding",
            "Provider",
            "Appeal",
            "Payment Posting",
            "Capitation",
            "Others"
        ];
        const finalresponse = await this.group_helper(response, category);
        return res.status(common_1.HttpStatus.OK).json({
            message: "category denial value",
            data: finalresponse,
        });
    }
    async subcategory_denial(req, res) {
        if (req.query.category == 'Eligibility Issue') {
            const response = await this.denialmanagementService.get_subcategory_value(req.query);
            const subcategory = [
                "Benefit Exhausted",
                "Coverage Termed",
                "Scbscriber issue",
                "Policy Details missing/invalid",
                "COB Issue",
                "New Born coverage issue",
                "PCP missing/invalid",
                "Covered by another Payer",
                "Hospice",
                "Patient information missing/invalid"
            ];
            const agegrp = [
                "0-10days",
                "11-30days",
                "31-60days",
                "61-90days",
                "91-120days",
                "121-180days",
                "181-365days",
            ];
            const finalresponse = await this.group_helper1(subcategory, agegrp, response);
            return res.status(common_1.HttpStatus.OK).json({
                message: "subcategory denial value",
                data: finalresponse,
            });
        }
        else if (req.query.category == 'Authorization') {
            const response = await this.denialmanagementService.get_subcategory_value(req.query);
            const subcategory = [
                "Need Prior Authorization",
                "Referral Auth",
                "Predetermination"
            ];
            const agegrp = [
                "0-10days",
                "11-30days",
                "31-60days",
                "61-90days",
                "91-120days",
                "121-180days",
                "181-365days",
            ];
            const finalresponse = await this.group_helper1(subcategory, agegrp, response);
            return res.status(common_1.HttpStatus.OK).json({
                message: "subcategory denial value",
                data: finalresponse,
            });
        }
        else if (req.query.category == 'TFL Issue') {
            const response = await this.denialmanagementService.get_subcategory_value(req.query);
            const subcategory = [
                "TFL Exceeded"
            ];
            const agegrp = [
                "0-10days",
                "11-30days",
                "31-60days",
                "61-90days",
                "91-120days",
                "121-180days",
                "181-365days",
            ];
            const finalresponse = await this.group_helper1(subcategory, agegrp, response);
            return res.status(common_1.HttpStatus.OK).json({
                message: "subcategory denial value",
                data: finalresponse,
            });
        }
        else if (req.query.category == 'Calling/Web Portal') {
            const response = await this.denialmanagementService.get_subcategory_value(req.query);
            const subcategory = [
                "Filling Indicator invalid",
                "Claim form invalid",
                "No Claim on file",
                "Non covered",
                "ICN# invalid",
                "Web Portal",
                "Duplicate",
                "Cross over claim",
                "Others",
                "Claim inprocess",
                "Pre Existing",
                "Claim Rejected",
                "Voided claim",
                "Information missing",
                "Premium issue",
                "Spending Amount",
            ];
            const agegrp = [
                "0-10days",
                "11-30days",
                "31-60days",
                "61-90days",
                "91-120days",
                "121-180days",
                "181-365days",
            ];
            const finalresponse = await this.group_helper1(subcategory, agegrp, response);
            return res.status(common_1.HttpStatus.OK).json({
                message: "subcategory denial value",
                data: finalresponse,
            });
        }
        else if (req.query.category == 'Coding') {
            const response = await this.denialmanagementService.get_subcategory_value(req.query);
            const subcategory = [
                "Modifier Issue",
                "CPT Issue",
                "Dates & Time Issue",
                "NDC# issue",
                "Units issue",
                "DX code issue",
                "Place of Service Issue",
                "CLIA# Issue",
                "Inclusive/Bundled",
                "Type of service"
            ];
            const agegrp = [
                "0-10days",
                "11-30days",
                "31-60days",
                "61-90days",
                "91-120days",
                "121-180days",
                "181-365days",
            ];
            const finalresponse = await this.group_helper1(subcategory, agegrp, response);
            return res.status(common_1.HttpStatus.OK).json({
                message: "subcategory denial value",
                data: finalresponse,
            });
        }
        else if (req.query.category == 'Provider') {
            const response = await this.denialmanagementService.get_subcategory_value(req.query);
            const subcategory = [
                "EDI issue",
                "Credential issue",
                "Tax id issue",
                "Provider ID issue",
                "Provider license",
                "Taxonomy issue",
                "Rendering provider issue",
            ];
            const agegrp = [
                "0-10days",
                "11-30days",
                "31-60days",
                "61-90days",
                "91-120days",
                "121-180days",
                "181-365days",
            ];
            const finalresponse = await this.group_helper1(subcategory, agegrp, response);
            return res.status(common_1.HttpStatus.OK).json({
                message: "subcategory denial value",
                data: finalresponse,
            });
        }
        else if (req.query.category == 'Appeal') {
            const response = await this.denialmanagementService.get_subcategory_value(req.query);
            const subcategory = [
                "Additional Information",
                "Medical Record",
                "Need itemized bill",
                "Need invoice information",
                "Medical Necessity"
            ];
            const agegrp = [
                "0-10days",
                "11-30days",
                "31-60days",
                "61-90days",
                "91-120days",
                "121-180days",
                "181-365days",
            ];
            const finalresponse = await this.group_helper1(subcategory, agegrp, response);
            return res.status(common_1.HttpStatus.OK).json({
                message: "subcategory denial value",
                data: finalresponse,
            });
        }
        else if (req.query.category == 'Payment Posting') {
            const response = await this.denialmanagementService.get_subcategory_value(req.query);
            const subcategory = [
                "Claim paid",
                "Deductible",
                "Coinsurance",
                "Copay"
            ];
            const agegrp = [
                "0-10days",
                "11-30days",
                "31-60days",
                "61-90days",
                "91-120days",
                "121-180days",
                "181-365days",
            ];
            const finalresponse = await this.group_helper1(subcategory, agegrp, response);
            return res.status(common_1.HttpStatus.OK).json({
                message: "subcategory denial value",
                data: finalresponse,
            });
        }
        else if (req.query.category == 'Capitation') {
            const response = await this.denialmanagementService.get_subcategory_value(req.query);
            const subcategory = [
                "Capitation"
            ];
            const agegrp = [
                "0-10days",
                "11-30days",
                "31-60days",
                "61-90days",
                "91-120days",
                "121-180days",
                "181-365days",
            ];
            const finalresponse = await this.group_helper1(subcategory, agegrp, response);
            return res.status(common_1.HttpStatus.OK).json({
                message: "subcategory denial value",
                data: finalresponse,
            });
        }
        else if (req.query.category == 'Others') {
            const response = await this.denialmanagementService.get_subcategory_value(req.query);
            const subcategory = [
                "Others"
            ];
            const agegrp = [
                "0-10days",
                "11-30days",
                "31-60days",
                "61-90days",
                "91-120days",
                "121-180days",
                "181-365days",
            ];
            const finalresponse = await this.group_helper1(subcategory, agegrp, response);
            return res.status(common_1.HttpStatus.OK).json({
                message: "subcategory denial value",
                data: finalresponse,
            });
        }
    }
    async getclaim(req, res) {
        const response = await this.denialmanagementService.get_denialclaim(req.query);
        return res.status(common_1.HttpStatus.OK).json({
            message: "denial claims",
            data: response,
        });
    }
};
__decorate([
    common_1.Get("overall/value"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DenialmanagementController.prototype, "denied", null);
__decorate([
    common_1.Get("category/value"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DenialmanagementController.prototype, "category_denial", null);
__decorate([
    common_1.Get("subcategory/value"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DenialmanagementController.prototype, "subcategory_denial", null);
__decorate([
    common_1.Get("claim"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DenialmanagementController.prototype, "getclaim", null);
DenialmanagementController = __decorate([
    common_1.Controller("denial"),
    __metadata("design:paramtypes", [denialmanagement_service_1.DenialmanagementService])
], DenialmanagementController);
exports.DenialmanagementController = DenialmanagementController;
//# sourceMappingURL=denialmanagement.controller.js.map