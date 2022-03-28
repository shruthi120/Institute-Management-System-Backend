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
exports.PayerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const payercategory_schema_1 = require("../schemas/payercategory.schema");
const payermaster_schema_1 = require("../schemas/payermaster.schema");
let PayerService = class PayerService {
    constructor(payercategoryModel, payermasterModel) {
        this.payercategoryModel = payercategoryModel;
        this.payermasterModel = payermasterModel;
    }
    async create_payercategory(req_body) {
        const new_payercategory = new this.payercategoryModel(req_body);
        return await new_payercategory.save();
    }
    async get_payercategory() {
        const payercategory = await this.payercategoryModel.find({});
        return payercategory;
    }
    async get_by_payercategory(query) {
        if (query) {
            const category = await this.payercategoryModel.find({
                category_name: { $regex: query, $options: 'i' },
            });
            return category;
        }
        else {
            throw new common_1.BadRequestException("pls enter input to search");
        }
    }
    async update_payercategory(id, req_body) {
        const category = await this.payercategoryModel.findByIdAndUpdate(id, req_body, {
            new: true,
        });
        return category;
    }
    async delete_payercategory(id) {
        const payercategory = await this.payercategoryModel.findByIdAndDelete(id);
        return payercategory;
    }
    async create_payermaster(req_body) {
        const new_payermaster = new this.payermasterModel(req_body);
        return await new_payermaster.save();
    }
    async get_payermaster() {
        const payermaster = await this.payermasterModel.find({});
        return payermaster;
    }
    async get_by_payermaster(query) {
        if (query) {
            const payermaster = await this.payermasterModel.find({
                payer_name: { $regex: query, $options: 'i' },
            });
            return payermaster;
        }
        else {
            throw new common_1.BadRequestException("pls enter input to search");
        }
    }
    async update_payermaster(id, req_body) {
        const payermaster = await this.payermasterModel.findByIdAndUpdate(id, req_body, {
            new: true,
        });
        return payermaster;
    }
    async delete_payermaster(id) {
        const payermaster = await this.payermasterModel.findByIdAndDelete(id);
        return payermaster;
    }
};
PayerService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Payercategory')),
    __param(1, mongoose_1.InjectModel('Payermaster')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], PayerService);
exports.PayerService = PayerService;
//# sourceMappingURL=payer.service.js.map