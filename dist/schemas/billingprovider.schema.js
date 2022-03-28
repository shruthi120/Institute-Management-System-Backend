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
exports.BillingProviderSchema = exports.BillingProvider = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let BillingProvider = class BillingProvider {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Display_name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Entity_type", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Billing_lastname", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Billing_firstname", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Address1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Address2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "City", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Country", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "State", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Zipcode", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Email", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Fax", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Phone", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Contactperson", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "FedTaxId", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "NPI", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "SSN", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], BillingProvider.prototype, "Send_to_EDI", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Taxonomycode", void 0);
__decorate([
    mongoose_1.Prop({ enum: ['Yes', 'No'] }),
    __metadata("design:type", String)
], BillingProvider.prototype, "default_billingprovider", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Footer", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], BillingProvider.prototype, "Pay_to_provider", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], BillingProvider.prototype, "AR_statement_Address", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Physician", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Type", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Service_Location", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Payer_Category", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BillingProvider.prototype, "Billing_Provider", void 0);
BillingProvider = __decorate([
    mongoose_1.Schema()
], BillingProvider);
exports.BillingProvider = BillingProvider;
exports.BillingProviderSchema = mongoose_1.SchemaFactory.createForClass(BillingProvider);
//# sourceMappingURL=billingprovider.schema.js.map