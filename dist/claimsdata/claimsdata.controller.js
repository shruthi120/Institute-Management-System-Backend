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
exports.ClaimsdataController = void 0;
const common_1 = require("@nestjs/common");
const claimsdata_service_1 = require("./claimsdata.service");
const jwt_access_guard_1 = require("../auth/jwt-access-guard");
const platform_express_1 = require("@nestjs/platform-express");
const XLSX = require("xlsx");
let ClaimsdataController = class ClaimsdataController {
    constructor(claimsdataService) {
        this.claimsdataService = claimsdataService;
    }
    async insertBulk(res, file) {
        console.log("fileis", file);
        var workbook = XLSX.read(file.buffer, { type: "buffer", cellDates: true });
        var sheet_name_list = workbook.SheetNames;
        var exceldata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        var dataperfect = false;
        var heading = [
            "ClaimID",
            "ChartID",
            "MRN",
            "Patient",
            "PatientDOB",
            "Physician",
            "ClaimDate",
            "Pripayer",
            "DateOfService",
            "PrimaryPolicyNo",
            "ARClass",
            "PayerID",
            "ICD10Code",
            "CPTCode",
            "BilledAmount",
            "Status",
        ];
        var headingcompare = [];
        for (let col in exceldata[0]) {
            if (!heading.includes(col)) {
                dataperfect = false;
                return res.status(400).json({
                    message: "header not matching with schema",
                });
            }
            else {
                headingcompare.push(col);
            }
        }
        if (headingcompare.length !== heading.length) {
            dataperfect = false;
            return res.status(400).json({
                message: "pls include all the required column fields in the datas",
            });
        }
        else {
            dataperfect = true;
        }
        if (dataperfect) {
            this.claimsdataService.insertBulk(exceldata, file.originalname);
            return res.status(common_1.HttpStatus.OK).json({
                message: "claims records inserted successfully",
            });
        }
        else {
            return res.status(400).json({
                message: "excel file not matching with schema",
            });
        }
    }
    async getuserdata(req, res) {
        const response = await this.claimsdataService.getclaimperuser(req.query.userid);
        return res.status(common_1.HttpStatus.OK).json({
            message: `the claims under user id ${req.query.userid} are`,
            Claims: response,
        });
    }
    async getall(req, res) {
        const response = await this.claimsdataService.getallclaim();
        return res.status(common_1.HttpStatus.OK).json({
            message: "list of all the claims ",
            Claims: response,
        });
    }
};
__decorate([
    common_1.Post("upload/bulk"),
    common_1.UseInterceptors(platform_express_1.FileInterceptor("file")),
    __param(0, common_1.Res()), __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimsdataController.prototype, "insertBulk", null);
__decorate([
    common_1.Get("user"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimsdataController.prototype, "getuserdata", null);
__decorate([
    common_1.Get("all"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClaimsdataController.prototype, "getall", null);
ClaimsdataController = __decorate([
    common_1.Controller("claim"),
    __metadata("design:paramtypes", [claimsdata_service_1.ClaimsdataService])
], ClaimsdataController);
exports.ClaimsdataController = ClaimsdataController;
//# sourceMappingURL=claimsdata.controller.js.map