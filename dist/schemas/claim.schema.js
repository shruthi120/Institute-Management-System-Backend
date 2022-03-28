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
exports.ClaimSchema = exports.Claim = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Claim = class Claim {
};
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "ClaimID", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "MRN", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "PatientFirstName", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "PatientLastName", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", Date)
], Claim.prototype, "PatientDOB", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "Physician", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", Date)
], Claim.prototype, "ClaimDate", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "Pripayer", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", Date)
], Claim.prototype, "DateOfService", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "PrimaryPolicyNo", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "ARClass", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "PayerID", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "Payercategory", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "ICD10Code", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", Number)
], Claim.prototype, "Age", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "AgeGrp", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", Number)
], Claim.prototype, "TotalBilledAmount", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", Number)
], Claim.prototype, "TotalBalanceAmount", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", Number)
], Claim.prototype, "TotalAmountPaid", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "ClaimStatus", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "OverallClaimStatus", void 0);
__decorate([
    mongoose_1.Prop({ type: [] }),
    __metadata("design:type", Array)
], Claim.prototype, "CPTS", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", Number)
], Claim.prototype, "Tfl", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", Number)
], Claim.prototype, "Touch", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "Claimunder", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "ClaimCategory", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "claimSubCategory", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "Overallcptstatus", void 0);
__decorate([
    mongoose_1.Prop({ default: Date.now }),
    __metadata("design:type", Date)
], Claim.prototype, "CreatedAt", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "type", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "Reason", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", Date)
], Claim.prototype, "paidDate", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", Date)
], Claim.prototype, "Followup_date", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "Location", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "controlNumber", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "tradingPartnerServiceId", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "payerIdentification", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "Pripayerphone", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "TaxID", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "ServiceProvider", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "Npi", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "ServiceProviderType", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "BillingProviderType", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "Gender", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "BeginingDOS", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "EndDOS", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "statusCategoryCode", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "statusCategoryCodeValue", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "statusCode", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "statusCodeValue", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "effectiveDate", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "checkIssueDate", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "checkNumber", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Claim.prototype, "trackingNumber", void 0);
Claim = __decorate([
    mongoose_1.Schema()
], Claim);
exports.Claim = Claim;
exports.ClaimSchema = mongoose_1.SchemaFactory.createForClass(Claim);
//# sourceMappingURL=claim.schema.js.map