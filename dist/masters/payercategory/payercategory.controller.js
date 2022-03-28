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
exports.PayercategoryController = void 0;
const common_1 = require("@nestjs/common");
const jwt_access_guard_1 = require("../../auth/jwt-access-guard");
const payercategory_service_1 = require("./payercategory.service");
const platform_express_1 = require("@nestjs/platform-express");
const XLSX = require("xlsx");
let PayercategoryController = class PayercategoryController {
    constructor(payercategoryService) {
        this.payercategoryService = payercategoryService;
    }
    async create_payercategory(req, res) {
        const response = await this.payercategoryService.create_payercategory(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Payer category Added successfully!",
            payer: response,
        });
    }
    async get_payercategory(res) {
        const response = await this.payercategoryService.get_payercategory();
        return res.status(common_1.HttpStatus.OK).json({
            message: "List of all available Payer categories",
            payer: response,
        });
    }
    async update_payercategory(req, res) {
        const response = await this.payercategoryService.update_payercategory(req.params.id, req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Payer category Updated",
            payer: response,
        });
    }
    async delete_payercategory(req, res) {
        const response = await this.payercategoryService.delete_payercategory(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Payer category Deleted",
            payer: response,
        });
    }
    async insert_categoryBulk(res, file) {
        console.log("fileis", file);
        let workbook = XLSX.read(file.buffer, { type: "buffer", cellDates: true });
        let sheet_name_list = workbook.SheetNames;
        let exceldata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        let dataperfect = false;
        let heading = ["Category_Name"];
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
            this.payercategoryService.insert_categoryBulk(exceldata, file.originalname);
            return res.status(common_1.HttpStatus.OK).json({
                message: "Payercategory records inserted successfully",
            });
        }
        else {
            return res.status(400).json({
                message: "excel file not matching with schema",
            });
        }
    }
    async getpayercategoryname(req, res) {
        const response = await this.payercategoryService.getpayercategoryname(req.query.Category_Name);
        return res.status(common_1.HttpStatus.OK).json({
            message: `the list under ${req.query.Category_Name} are`,
            payer: response,
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
], PayercategoryController.prototype, "create_payercategory", null);
__decorate([
    common_1.Get("all"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PayercategoryController.prototype, "get_payercategory", null);
__decorate([
    common_1.Put(":id"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayercategoryController.prototype, "update_payercategory", null);
__decorate([
    common_1.Delete(":id"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayercategoryController.prototype, "delete_payercategory", null);
__decorate([
    common_1.Post("bulk/upload"),
    common_1.UseGuards(jwt_access_guard_1.default),
    common_1.UseInterceptors(platform_express_1.FileInterceptor("file")),
    __param(0, common_1.Res()), __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayercategoryController.prototype, "insert_categoryBulk", null);
__decorate([
    common_1.Get("advancedfilter"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayercategoryController.prototype, "getpayercategoryname", null);
PayercategoryController = __decorate([
    common_1.Controller("payercategory"),
    __metadata("design:paramtypes", [payercategory_service_1.PayercategoryService])
], PayercategoryController);
exports.PayercategoryController = PayercategoryController;
//# sourceMappingURL=payercategory.controller.js.map