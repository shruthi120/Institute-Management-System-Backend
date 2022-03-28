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
exports.PayermasterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const payermaster_schema_1 = require("../../schemas/payermaster.schema");
let PayermasterService = class PayermasterService {
    constructor(payermasterModel) {
        this.payermasterModel = payermasterModel;
    }
    async create_payermaster(req_body) {
        const new_payermaster = new this.payermasterModel(req_body);
        return await new_payermaster.save();
    }
    async get_payermaster() {
        const payermaster = await this.payermasterModel.find({});
        return payermaster;
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
    async insertBulk(exceldata, name) {
        let arrayToInsertinpayermaster = [];
        for (let row of exceldata) {
            const oneRow = {
                CPID: row.CPID,
                Payer_Name: row.Payer_Name,
                Eligibility_RealtimePayerID: row.Eligibility_RealtimePayerID,
                InsuranceName: row.Insurance_Name,
                PayerID: row.PayerID,
                Type: row.Type,
                Active: row.Active,
            };
            arrayToInsertinpayermaster.push(oneRow);
        }
        await this.payermasterModel.insertMany(arrayToInsertinpayermaster);
    }
    async advancedpayermastersearch(obj) {
        let value = [];
        for (let x in obj) {
            value.push(obj[x]);
        }
        console.log("obj", obj);
        console.log("values", value);
        if (value.length <= 4) {
            const payermaster = await this.payermasterModel.find({
                $and: [obj],
            });
            return payermaster;
        }
    }
};
PayermasterService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("Payermaster")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PayermasterService);
exports.PayermasterService = PayermasterService;
//# sourceMappingURL=payermaster.service.js.map