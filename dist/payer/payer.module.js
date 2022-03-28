"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayerModule = void 0;
const common_1 = require("@nestjs/common");
const payer_controller_1 = require("./payer.controller");
const payer_service_1 = require("./payer.service");
const mongoose_1 = require("@nestjs/mongoose");
const counter_service_1 = require("../counter/counter.service");
const counter_schema_1 = require("../schemas/counter.schema");
const payercategory_schema_1 = require("../schemas/payercategory.schema");
const payermaster_schema_1 = require("../schemas/payermaster.schema");
let PayerModule = class PayerModule {
};
PayerModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: payercategory_schema_1.Payercategory.name, schema: payercategory_schema_1.PayercategorySchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: payermaster_schema_1.Payermaster.name, schema: payermaster_schema_1.PayermasterSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: counter_schema_1.Counter.name, schema: counter_schema_1.CounterSchema }]),
        ],
        controllers: [payer_controller_1.PayerController],
        providers: [payer_service_1.PayerService, counter_service_1.CounterService]
    })
], PayerModule);
exports.PayerModule = PayerModule;
//# sourceMappingURL=payer.module.js.map