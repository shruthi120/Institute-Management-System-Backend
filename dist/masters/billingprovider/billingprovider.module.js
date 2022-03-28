"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingproviderModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const billingprovider_schema_1 = require("../../schemas/billingprovider.schema");
const billingprovider_controller_1 = require("./billingprovider.controller");
const billingprovider_service_1 = require("./billingprovider.service");
let BillingproviderModule = class BillingproviderModule {
};
BillingproviderModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: billingprovider_schema_1.BillingProvider.name, schema: billingprovider_schema_1.BillingProviderSchema }]),
        ],
        controllers: [billingprovider_controller_1.BillingproviderController],
        providers: [billingprovider_service_1.BillingproviderService]
    })
], BillingproviderModule);
exports.BillingproviderModule = BillingproviderModule;
//# sourceMappingURL=billingprovider.module.js.map