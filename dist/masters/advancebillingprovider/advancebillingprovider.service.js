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
exports.AdvancebillingproviderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const advancedbillingprovider_schema_1 = require("../../schemas/advancedbillingprovider.schema");
let AdvancebillingproviderService = class AdvancebillingproviderService {
    constructor(advancedbillingproviderModal) {
        this.advancedbillingproviderModal = advancedbillingproviderModal;
    }
    async create_advancedbillingprovider(req_body) {
        const new_Advanced_billingprovider = new this.advancedbillingproviderModal(req_body);
        return new_Advanced_billingprovider.save();
    }
    async get_all_advancedbillingprovider() {
        const Advanced_billingprovider = await this.advancedbillingproviderModal.find({});
        return Advanced_billingprovider;
    }
    async update_advancedbillingprovider(id, body) {
        const Advanced_billingprovider = await this.advancedbillingproviderModal.findByIdAndUpdate(id, body, { new: true });
        return Advanced_billingprovider;
    }
    async delete_advancedbillingprovider(id) {
        const Advanced_billingprovider = await this.advancedbillingproviderModal.findByIdAndDelete(id);
        ;
        return Advanced_billingprovider;
    }
};
AdvancebillingproviderService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('AdvancedBillingProvider')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AdvancebillingproviderService);
exports.AdvancebillingproviderService = AdvancebillingproviderService;
//# sourceMappingURL=advancebillingprovider.service.js.map