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
exports.PayercategorySchema = exports.Payercategory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Payercategory = class Payercategory {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payercategory.prototype, "category_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payercategory.prototype, "category_name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payercategory.prototype, "description", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Payercategory.prototype, "billing_provider", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Payercategory.prototype, "insurance_adjustment", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Payercategory.prototype, "write_off", void 0);
__decorate([
    mongoose_1.Prop({ enum: ['Yes', 'No'] }),
    __metadata("design:type", String)
], Payercategory.prototype, "preauthorization", void 0);
__decorate([
    mongoose_1.Prop({ enum: ['Enabled', 'Disabled'] }),
    __metadata("design:type", String)
], Payercategory.prototype, "status", void 0);
Payercategory = __decorate([
    mongoose_1.Schema()
], Payercategory);
exports.Payercategory = Payercategory;
exports.PayercategorySchema = mongoose_1.SchemaFactory.createForClass(Payercategory);
//# sourceMappingURL=payercategory.schema.js.map