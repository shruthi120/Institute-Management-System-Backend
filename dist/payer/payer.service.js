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
const counter_service_1 = require("../counter/counter.service");
const payercategory_schema_1 = require("../schemas/payercategory.schema");
const payermaster_schema_1 = require("../schemas/payermaster.schema");
let PayerService = class PayerService {
    constructor(payercategoryModel, payermasterModel, counterService) {
        this.payercategoryModel = payercategoryModel;
        this.payermasterModel = payermasterModel;
        this.counterService = counterService;
    }
    async create_pcategory(req_body) {
        const new_pcategory = new this.payercategoryModel(req_body);
        return await new_pcategory.save();
    }
    async get_pcategory() {
        const pcategory = await this.payercategoryModel.find().sort({ _id: -1 });
        return pcategory;
    }
    async update_pcategory(id, req_body) {
        const category = await this.payercategoryModel.findByIdAndUpdate(id, req_body, {
            new: true,
        });
        return category;
    }
    async delete_pcategory(id) {
        const pcategory = await this.payercategoryModel.findByIdAndDelete(id);
        return pcategory;
    }
    async create_pmaster(req_body) {
        const new_pmaster = new this.payermasterModel(req_body);
        return await new_pmaster.save();
    }
    async get_pmaster() {
        const pmaster = await this.payermasterModel.find().sort({ _id: -1 });
        return pmaster;
    }
    async update_pmaster(id, req_body) {
        const pmaster = await this.payermasterModel.findByIdAndUpdate(id, req_body, {
            new: true,
        });
        return pmaster;
    }
    async delete_pmaster(id) {
        const pmaster = await this.payermasterModel.findByIdAndDelete(id);
        return pmaster;
    }
};
PayerService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Payercategory')),
    __param(1, mongoose_1.InjectModel('Payermaster')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        counter_service_1.CounterService])
], PayerService);
exports.PayerService = PayerService;
//# sourceMappingURL=payer.service.js.map