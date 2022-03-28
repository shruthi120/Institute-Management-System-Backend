"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvancebillingproviderModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const advancedbillingprovider_schema_1 = require("../../schemas/advancedbillingprovider.schema");
const advancebillingprovider_controller_1 = require("./advancebillingprovider.controller");
const advancebillingprovider_service_1 = require("./advancebillingprovider.service");
let AdvancebillingproviderModule = class AdvancebillingproviderModule {
};
AdvancebillingproviderModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: advancedbillingprovider_schema_1.AdvancedBillingProvider.name, schema: advancedbillingprovider_schema_1.AdvancedBillingProviderSchema }]),
        ],
        controllers: [advancebillingprovider_controller_1.AdvancebillingproviderController],
        providers: [advancebillingprovider_service_1.AdvancebillingproviderService]
    })
], AdvancebillingproviderModule);
exports.AdvancebillingproviderModule = AdvancebillingproviderModule;
//# sourceMappingURL=advancebillingprovider.module.js.map