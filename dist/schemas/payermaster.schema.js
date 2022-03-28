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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayermasterSchema = exports.Payermaster = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Payermaster = class Payermaster {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "payerName", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "payer_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "category_name", void 0);
__decorate([
    mongoose_1.Prop({ enum: ["Web", "IVR", "Manual"] }),
    __metadata("design:type", String)
], Payermaster.prototype, "type", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "authorizationRequired", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "payerassignedPayerID", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "routingMethod", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "batchAndRealTime", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "payerCategory", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "contact", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "carrier_code", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "CPIDs", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "address1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "address2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "city", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "state", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "country", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "zip_code", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "telphno1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "telphno2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "fax", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "billing_method", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "receiver_name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "indicator", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "plan_type", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "incentive_category", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Payermaster.prototype, "filling_limit1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Payermaster.prototype, "filling_limit2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Payermaster.prototype, "no_of_days", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "partA_indicator", void 0);
__decorate([
    mongoose_1.Prop({ enum: ["Yes", "No"] }),
    __metadata("design:type", String)
], Payermaster.prototype, "taxonomy_code", void 0);
__decorate([
    mongoose_1.Prop({ enum: ["Enabled", "Disabled"] }),
    __metadata("design:type", String)
], Payermaster.prototype, "status", void 0);
__decorate([
    mongoose_1.Prop({ enum: ["Yes", "No"] }),
    __metadata("design:type", String)
], Payermaster.prototype, "provider_id", void 0);
__decorate([
    mongoose_1.Prop({ enum: ["Yes", "No"] }),
    __metadata("design:type", String)
], Payermaster.prototype, "default_refferring_provider", void 0);
__decorate([
    mongoose_1.Prop({ enum: ["Yes", "No"] }),
    __metadata("design:type", String)
], Payermaster.prototype, "billedby_ehr_for_rcm", void 0);
__decorate([
    mongoose_1.Prop({ enum: ["Yes", "No"] }),
    __metadata("design:type", String)
], Payermaster.prototype, "resend_unapplied_claims", void 0);
__decorate([
    mongoose_1.Prop({ enum: ["Yes", "No"] }),
    __metadata("design:type", String)
], Payermaster.prototype, "send_patientadress", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "default_electronicLab", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "labcorp_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "labCorp_plaintype", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "medicalLab_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "quest_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "enzo_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "propath_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "bloref_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "phelps_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "hdl_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "lenco_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "accurate_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "chGroup_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "appleLab_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "empireLab_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "enigma_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "sheilLab_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "fusion_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "everest_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "mercy_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "smaLab_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "ez_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "solstas_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payermaster.prototype, "plan_name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Payermaster.prototype, "Tfl", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Payermaster.prototype, "resubmit", void 0);
Payermaster = __decorate([
    mongoose_1.Schema()
], Payermaster);
exports.Payermaster = Payermaster;
exports.PayermasterSchema = mongoose_1.SchemaFactory.createForClass(Payermaster);
//# sourceMappingURL=payermaster.schema.js.map