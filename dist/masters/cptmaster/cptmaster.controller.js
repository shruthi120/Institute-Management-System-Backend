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
exports.CptmasterController = void 0;
const common_1 = require("@nestjs/common");
const jwt_access_guard_1 = require("../../auth/jwt-access-guard");
const cptmaster_service_1 = require("./cptmaster.service");
const platform_express_1 = require("@nestjs/platform-express");
const XLSX = require("xlsx");
let CptmasterController = class CptmasterController {
    constructor(cptmasterService) {
        this.cptmasterService = cptmasterService;
    }
    async create_cptmaster(req, res) {
        const response = await this.cptmasterService.create_cptmaster(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "CPT master Added successfully!",
            cpt: response,
        });
    }
    async get_cptmaster(res) {
        const response = await this.cptmasterService.get_cptmaster();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of all available CPT masters",
            cpt: response,
        });
    }
    async update_cptmaster(req, res) {
        const response = await this.cptmasterService.update_cptmaster(req.params.id, req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Cpt master updated successfully!",
            cpt: response,
        });
    }
    async delete_cptmaster(req, res) {
        const response = await this.cptmasterService.delete_cptmaster(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Cpt master deleted successfully!",
            cpt: response,
        });
    }
    async insertBulk(res, file) {
        console.log("fileis", file);
        let workbook = XLSX.read(file.buffer, { type: "buffer", cellDates: true });
        let sheet_name_list = workbook.SheetNames;
        let exceldata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        let dataperfect = false;
        let heading = ["Code", "CPT_DESCRIPTION", "Units", "Amount"];
        let headingcompare = [];
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
            this.cptmasterService.insertBulk(exceldata, file.originalname);
            return res.status(common_1.HttpStatus.OK).json({
                message: "Cptmaster records inserted successfully",
            });
        }
        else {
            return res.status(400).json({
                message: "excel file not matching with schema",
            });
        }
    }
    async advancedcptmastersearch(req, res) {
        const response = await this.cptmasterService.advancedcptmastersearch(req.query);
        return res.status(common_1.HttpStatus.OK).json({
            message: "the list under cpt master are",
            cpt: response,
        });
    }
};
__decorate([
    common_1.Post("create"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CptmasterController.prototype, "create_cptmaster", null);
__decorate([
    common_1.Get("all"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CptmasterController.prototype, "get_cptmaster", null);
__decorate([
    common_1.Put(":id"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CptmasterController.prototype, "update_cptmaster", null);
__decorate([
    common_1.Delete(":id"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CptmasterController.prototype, "delete_cptmaster", null);
__decorate([
    common_1.Post("bulk/upload"),
    common_1.UseGuards(jwt_access_guard_1.default),
    common_1.UseInterceptors(platform_express_1.FileInterceptor("file")),
    __param(0, common_1.Res()), __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CptmasterController.prototype, "insertBulk", null);
__decorate([
    common_1.Get("advancedfilter"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CptmasterController.prototype, "advancedcptmastersearch", null);
CptmasterController = __decorate([
    common_1.Controller("cptmaster"),
    __metadata("design:paramtypes", [cptmaster_service_1.CptmasterService])
], CptmasterController);
exports.CptmasterController = CptmasterController;
//# sourceMappingURL=cptmaster.controller.js.map