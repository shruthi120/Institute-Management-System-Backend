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
exports.UploadfileController = void 0;
const common_1 = require("@nestjs/common");
const uploadfile_service_1 = require("./uploadfile.service");
const platform_express_1 = require("@nestjs/platform-express");
const XLSX = require("xlsx");
let UploadfileController = class UploadfileController {
    constructor(uploadfileService) {
        this.uploadfileService = uploadfileService;
    }
    async insertBulk(res, file) {
        var workbook = XLSX.read(file.buffer, { type: "buffer", cellDates: true });
        var sheet_name_list = workbook.SheetNames;
        var exceldata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        var dataperfect = false;
        var heading = [
            "ClaimID",
            "MRN",
            "PatientDOB",
            "ClaimDate",
            "PayerID",
            "Location",
            "organizationName",
            "TaxID",
            "BillingProviderType",
            "ServiceProvider",
            "Npi",
            "ServiceProviderType",
            "MemberID",
            "FirstName",
            "LastName",
            "Gender",
            "DOB",
            "BeginingDOS",
            "EndDOS",
            "Patientnumber",
            "DOS",
            "Physician",
            "ARClass",
            "ICD10Code"
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
        dataperfect = true;
        if (dataperfect) {
            await this.uploadfileService.chnagehealthcareapi(exceldata, workbook);
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
    async get_all_users(req, res) {
        const response = await this.uploadfileService.get_all_uploads();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of all upload file",
            files: response,
        });
    }
    async delete(req, res) {
        const response = await this.uploadfileService.delete_file(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: "file Deleted",
            files: response,
        });
    }
    async get_files(req, res) {
        const response = await this.uploadfileService.get_files_by_date(req.query.from, req.query.to);
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of files upload in given date range",
            files: response,
        });
    }
};
__decorate([
    common_1.Post("claim/bulk"),
    common_1.UseInterceptors(platform_express_1.FileInterceptor("file")),
    __param(0, common_1.Res()), __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UploadfileController.prototype, "insertBulk", null);
__decorate([
    common_1.Get("all"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UploadfileController.prototype, "get_all_users", null);
__decorate([
    common_1.Delete(":id"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UploadfileController.prototype, "delete", null);
__decorate([
    common_1.Get("filter"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UploadfileController.prototype, "get_files", null);
UploadfileController = __decorate([
    common_1.Controller("upload"),
    __metadata("design:paramtypes", [uploadfile_service_1.UploadfileService])
], UploadfileController);
exports.UploadfileController = UploadfileController;
//# sourceMappingURL=uploadfile.controller.js.map