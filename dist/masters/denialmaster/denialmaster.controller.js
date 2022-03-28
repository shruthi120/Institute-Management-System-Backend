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
exports.DenialmasterController = void 0;
const common_1 = require("@nestjs/common");
const denialmaster_service_1 = require("./denialmaster.service");
const jwt_access_guard_1 = require("../../auth/jwt-access-guard");
const platform_express_1 = require("@nestjs/platform-express");
const XLSX = require("xlsx");
let DenialmasterController = class DenialmasterController {
    constructor(denialmasterService) {
        this.denialmasterService = denialmasterService;
    }
    async create_denialmaster(req, res) {
        const response = await this.denialmasterService.create_denialmaster(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Denialmaster created successfully!',
            denialmaster: response,
        });
    }
    async get_all_denialmaster(res) {
        const response = await this.denialmasterService.get_all_denialmaster();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of available denialmaster',
            denialmaster: response,
        });
    }
    async update_denialmaster(req, res) {
        const response = await this.denialmasterService.update_denialmaster(req.params.id, req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Denialmaster updated!',
            denialmaster: response,
        });
    }
    async delete_denialmaster(req, res) {
        const response = await this.denialmasterService.delete_denialmaster(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Denialmaster deleted!',
            denialmaster: response,
        });
    }
    async insertBulk(res, file) {
        console.log("fileis", file);
        let workbook = XLSX.read(file.buffer, { type: "buffer", cellDates: true });
        let sheet_name_list = workbook.SheetNames;
        console.log(sheet_name_list);
        let exceldata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {
            header: 0,
            defval: ""
        });
        let dataperfect = false;
        let heading = [
            "statusCode",
            "reason",
            "claimCategory",
            "claimSubCategory",
            "statusCategoryCode",
            "claimStatus",
            "RankCategory",
            "Notes1",
            "Notes2",
            "Comments",
            "Bucket_to_be_moved",
            "RemarkCodeOrDesc",
            "Action1",
            "Action2",
        ];
        let headingcompare = [];
        for (let col in exceldata[0]) {
            console.log("check", exceldata[0]);
            console.log("col", col);
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
            this.denialmasterService.insertBulk(exceldata, file.originalname);
            return res.status(common_1.HttpStatus.OK).json({
                message: "denialmaster records inserted successfully",
            });
        }
        else {
            return res.status(400).json({
                message: "excel file not matching with schema",
            });
        }
    }
};
__decorate([
    common_1.Post('create'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DenialmasterController.prototype, "create_denialmaster", null);
__decorate([
    common_1.Get('all'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DenialmasterController.prototype, "get_all_denialmaster", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DenialmasterController.prototype, "update_denialmaster", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DenialmasterController.prototype, "delete_denialmaster", null);
__decorate([
    common_1.Post("bulk/upload"),
    common_1.UseInterceptors(platform_express_1.FileInterceptor("file")),
    __param(0, common_1.Res()), __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DenialmasterController.prototype, "insertBulk", null);
DenialmasterController = __decorate([
    common_1.Controller('denialmaster'),
    __metadata("design:paramtypes", [denialmaster_service_1.DenialmasterService])
], DenialmasterController);
exports.DenialmasterController = DenialmasterController;
//# sourceMappingURL=denialmaster.controller.js.map