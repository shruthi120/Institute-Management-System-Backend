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
exports.ClaiminfoSchema = exports.Claiminfo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Claiminfo = class Claiminfo {
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Claiminfo.prototype, "MRN", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "SSN", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Claiminfo.prototype, "DOB", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Claiminfo.prototype, "Sex", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "MaritalStatus", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Siblings", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Ethnicity", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Race", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "AdditionalRace", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Language", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Communication", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Other", void 0);
__decorate([
    mongoose_1.Prop({ enum: ['Active', 'Inactive'] }),
    __metadata("design:type", String)
], Claiminfo.prototype, "Status", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Class", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Claiminfo.prototype, "Cont_default_billingaddress", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Claiminfo.prototype, "MarkAs_Incrtpatientaddress", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Claiminfo.prototype, "Cont_AddLine1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Cont_AddLine2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Cont_Country", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Claiminfo.prototype, "Cont_State", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Claiminfo.prototype, "Cont_City", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Claiminfo.prototype, "Cont_ZIP", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Cont_Phone", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Cont_Fax", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Cont_Cell", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Cont_Email", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Claiminfo.prototype, "Emer_default_billingaddress", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Claiminfo.prototype, "SameasCI", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emer_AddLine1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emer_AddLine2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emer_Country", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emer_State", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emer_City", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emer_ZIP", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emer_Phone", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emer_Cell", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emer_Dob", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emer_Gender", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Employer", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Work_Ph", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emp_Addline1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emp_Addline2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emp_Country", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emp_State", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emp_City", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emp_ZIP", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emp_Phone", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emp_Fax", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emp_Cell", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emp_Email", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Emp_Status", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_Carrier", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_Category", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_Receiver", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_EMRInsuranceId", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_ProgramPlanType", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_IncentiveType", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_Address", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_Country", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_State", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_City", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_ZIP", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_Phone", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_Facsimile", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_Plan", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_EffectiveDate", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_ID_No", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_Policyno", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_Copay", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_Subscriber", void 0);
__decorate([
    mongoose_1.Prop({ enum: ['Yes', 'No'] }),
    __metadata("design:type", String)
], Claiminfo.prototype, "CapitationAgreement", void 0);
__decorate([
    mongoose_1.Prop({ enum: ['Yes', 'No'] }),
    __metadata("design:type", String)
], Claiminfo.prototype, "DoNot_BalanceBill", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_ExpiryDate", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_Notes", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Primary_GuarantorId", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Claiminfo.prototype, "PrimaryGuarantor_Name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "PrimaryGuarantor_Address", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "PrimaryGuarantor_Country", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "PrimaryGuarantor_State", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "PrimaryGuarantor_City", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "PrimaryGuarantor_ZIP", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "PrimaryGuarantor_Phone", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "PrimaryGuarantor_Fax", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "PrimaryGuarantor_Cell", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "PrimaryGuarantor_Email", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "PrimaryGuarantor_Sex", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "PrimaryGuarantor_Dob", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "PrimaryGuarantor_Relation", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_Carrier", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_Category", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_Receiver", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_EMRInsuranceId", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_ProgramPlanType", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_IncentiveType", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "MSPType", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_Address", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_Country", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_State", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_City", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_ZIP", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_Phone", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_Facsimile", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_Plan", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_EffectiveDate", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_ID_No", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_Policyno", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_Copay", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_Subscriber", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_ExpiryDate", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_Notes", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "Secondary_GuarantorId", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Claiminfo.prototype, "SecondaryGuarantor_Name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "SecondaryGuarantor_Address", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "SecondaryGuarantor_Country", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "SecondaryGuarantor_State", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "SecondaryGuarantor_City", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "SecondaryGuarantor_ZIP", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "SecondaryGuarantor_Phone", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "SecondaryGuarantor_Fax", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "SecondaryGuarantor_Cell", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "SecondaryGuarantor_Email", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "SecondaryGuarantor_Sex", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "SecondaryGuarantor_Dob", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Claiminfo.prototype, "SecondaryGuarantor_Relation", void 0);
Claiminfo = __decorate([
    mongoose_1.Schema()
], Claiminfo);
exports.Claiminfo = Claiminfo;
exports.ClaiminfoSchema = mongoose_1.SchemaFactory.createForClass(Claiminfo);
//# sourceMappingURL=claiminfo.schema.js.map