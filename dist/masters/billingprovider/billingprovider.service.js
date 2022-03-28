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
exports.BillingproviderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const billingprovider_schema_1 = require("../../schemas/billingprovider.schema");
let BillingproviderService = class BillingproviderService {
    constructor(billingproviderModal) {
        this.billingproviderModal = billingproviderModal;
    }
    async create_billingprovider(req_body) {
        const new_billingprovider = new this.billingproviderModal(req_body);
        return new_billingprovider.save();
    }
    async get_all_billingprovider() {
        const billingprovider = await this.billingproviderModal.find({});
        return billingprovider;
    }
    async update_billingprovider(id, body) {
        const billingprovider = await this.billingproviderModal.findByIdAndUpdate(id, body, { new: true });
        return billingprovider;
    }
    async delete_billingprovider(id) {
        const billingprovider = await this.billingproviderModal.findByIdAndDelete(id);
        ;
        return billingprovider;
    }
};
BillingproviderService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('BillingProvider')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BillingproviderService);
exports.BillingproviderService = BillingproviderService;
//# sourceMappingURL=billingprovider.service.js.map