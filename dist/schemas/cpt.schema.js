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
exports.CptSchema = exports.Cpt = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Cpt = class Cpt {
};
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "Date", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "CPTCode", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "serviceIdQualifierCode", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "serviceIdQualifier", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "submittedAmount", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "amountPaid", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "submittedUnits", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "statusCategoryCode", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "statusCategoryCodeValue", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "statusCode", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "statusCodeValue", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "effectiveDate", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "TotalBalanceAmount", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "ClaimID", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "Source", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "ICD", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "Comments", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "check_no", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "Amount", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "Secondary_Resp", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "CoPayment", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "InsurancePayment", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "InsuranceAdjustment", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "Provider", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "PaymentMode", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "PRT", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "SEC", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], Cpt.prototype, "Charge", void 0);
Cpt = __decorate([
    mongoose_1.Schema()
], Cpt);
exports.Cpt = Cpt;
exports.CptSchema = mongoose_1.SchemaFactory.createForClass(Cpt);
//# sourceMappingURL=cpt.schema.js.map