"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EligibilityModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const upload_schema_1 = require("../schemas/upload.schema");
const claim_schema_1 = require("../schemas/claim.schema");
const cpt_schema_1 = require("../schemas/cpt.schema");
const payermaster_schema_1 = require("../schemas/payermaster.schema");
const eligibility_controller_1 = require("./eligibility.controller");
const eligibility_service_1 = require("./eligibility.service");
const counter_service_1 = require("../counter/counter.service");
const counter_controller_1 = require("../counter/counter.controller");
const eligibility_schema_1 = require("../schemas/eligibility.schema");
const denialcategorymaster_schema_1 = require("../schemas/denialcategorymaster.schema");
const counter_schema_1 = require("../schemas/counter.schema");
let EligibilityModule = class EligibilityModule {
};
EligibilityModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: eligibility_schema_1.Eligibility.name, schema: eligibility_schema_1.EligibilitySchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: claim_schema_1.Claim.name, schema: claim_schema_1.ClaimSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: cpt_schema_1.Cpt.name, schema: cpt_schema_1.CptSchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: payermaster_schema_1.Payermaster.name, schema: payermaster_schema_1.PayermasterSchema },
            ]),
            mongoose_1.MongooseModule.forFeature([{ name: counter_schema_1.Counter.name, schema: counter_schema_1.CounterSchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: denialcategorymaster_schema_1.Denialcategorymaster.name, schema: denialcategorymaster_schema_1.DenialcategorymasterSchema },
            ]),
        ],
        controllers: [eligibility_controller_1.EligibilityController],
        providers: [eligibility_service_1.Eligibilityservice, counter_service_1.CounterService],
    })
], EligibilityModule);
exports.EligibilityModule = EligibilityModule;
//# sourceMappingURL=eligibility.module.js.map