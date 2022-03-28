"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomeModule = void 0;
const common_1 = require("@nestjs/common");
const outcome_controller_1 = require("./outcome.controller");
const outcome_service_1 = require("./outcome.service");
const mongoose_1 = require("@nestjs/mongoose");
const claim_schema_1 = require("../schemas/claim.schema");
const cpt_schema_1 = require("../schemas/cpt.schema");
let OutcomeModule = class OutcomeModule {
};
OutcomeModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: claim_schema_1.Claim.name, schema: claim_schema_1.ClaimSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: cpt_schema_1.Cpt.name, schema: cpt_schema_1.CptSchema }]),
        ],
        controllers: [outcome_controller_1.OutcomeController],
        providers: [outcome_service_1.OutcomeService],
    })
], OutcomeModule);
exports.OutcomeModule = OutcomeModule;
//# sourceMappingURL=outcome.module.js.map