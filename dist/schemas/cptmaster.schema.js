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
exports.CptmasterSchema = exports.Cptmaster = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Cptmaster = class Cptmaster {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Cptmaster.prototype, "cpt_code", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Cptmaster.prototype, "unit", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Cptmaster.prototype, "price", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Cptmaster.prototype, "expected_amt", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Cptmaster.prototype, "revenue_code", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Cptmaster.prototype, "description", void 0);
__decorate([
    mongoose_1.Prop({ enum: ['Yes', 'No'] }),
    __metadata("design:type", String)
], Cptmaster.prototype, "lab_code", void 0);
__decorate([
    mongoose_1.Prop({ enum: ['Active', 'Inactive'] }),
    __metadata("design:type", String)
], Cptmaster.prototype, "status", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Cptmaster.prototype, "modifier1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Cptmaster.prototype, "modifier2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Cptmaster.prototype, "modifier3", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Cptmaster.prototype, "modifier4", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Cptmaster.prototype, "drug", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Cptmaster.prototype, "desc_in_sv101", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Cptmaster.prototype, "rlsd", void 0);
__decorate([
    mongoose_1.Prop({ enum: ['Yes', 'No'] }),
    __metadata("design:type", String)
], Cptmaster.prototype, "supervising_provider", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Cptmaster.prototype, "not_bill_to_insurance", void 0);
__decorate([
    mongoose_1.Prop({ type: Object }),
    __metadata("design:type", Object)
], Cptmaster.prototype, "insurance_category", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Cptmaster.prototype, "age_from", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Cptmaster.prototype, "age_to", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Cptmaster.prototype, "gender", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Cptmaster.prototype, "frequency", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], Cptmaster.prototype, "effective_date", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], Cptmaster.prototype, "expiry_date", void 0);
Cptmaster = __decorate([
    mongoose_1.Schema()
], Cptmaster);
exports.Cptmaster = Cptmaster;
exports.CptmasterSchema = mongoose_1.SchemaFactory.createForClass(Cptmaster);
//# sourceMappingURL=cptmaster.schema.js.map