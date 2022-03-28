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
exports.DenialmasterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const denialcategorymaster_schema_1 = require("../../schemas/denialcategorymaster.schema");
let DenialmasterService = class DenialmasterService {
    constructor(denialcategorymasterModal) {
        this.denialcategorymasterModal = denialcategorymasterModal;
    }
    async create_denialmaster(req_body) {
        const new_denialmaster = new this.denialcategorymasterModal(req_body);
        return new_denialmaster.save();
    }
    async get_all_denialmaster() {
        const denialmaster = await this.denialcategorymasterModal.find({});
        return denialmaster;
    }
    async update_denialmaster(id, body) {
        const denialmaster = await this.denialcategorymasterModal.findByIdAndUpdate(id, body, { new: true });
        return denialmaster;
    }
    async delete_denialmaster(id) {
        const denialmaster = await this.denialcategorymasterModal.findByIdAndDelete(id);
        ;
        return denialmaster;
    }
    async insertBulk(exceldata, name) {
        let arrayToInsertinpayermaster = [];
        for (let row of exceldata) {
            const oneRow = {
                statusCode: row.statusCode,
                reason: row.reason,
                claimCategory: row.claimCategory,
                claimSubCategory: row.claimSubCategory,
                statusCategoryCode: row.statusCategoryCode,
                claimStatus: row.claimStatus,
                RankCategory: row.RankCategory,
                Notes1: row.Notes1,
                Notes2: row.Notes2,
                Comments: row.Comments,
                Bucket_to_be_moved: row.Bucket_to_be_moved,
                RemarkCodeOrDesc: row.RemarkCodeOrDesc,
                Action1: row.Action1,
                Action2: row.Action2,
            };
            arrayToInsertinpayermaster.push(oneRow);
        }
        await this.denialcategorymasterModal.insertMany(arrayToInsertinpayermaster);
    }
};
DenialmasterService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Denialcategorymaster')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DenialmasterService);
exports.DenialmasterService = DenialmasterService;
//# sourceMappingURL=denialmaster.service.js.map