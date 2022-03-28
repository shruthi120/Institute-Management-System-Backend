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
exports.DenialcategorymasterSchema = exports.Denialcategorymaster = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Denialcategorymaster = class Denialcategorymaster {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "statusCategoryCode", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "statusCode", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "Remarkcode", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "Category", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "SubCategory", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "claimStatus", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "RankCategory", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "Notes1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "Notes2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "Action1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "Action2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "reason", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "Comments", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "Bucket_to_be_moved", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "RemarkCodeOrDesc", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "claimCategory", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Denialcategorymaster.prototype, "claimSubCategory", void 0);
Denialcategorymaster = __decorate([
    mongoose_1.Schema()
], Denialcategorymaster);
exports.Denialcategorymaster = Denialcategorymaster;
exports.DenialcategorymasterSchema = mongoose_1.SchemaFactory.createForClass(Denialcategorymaster);
//# sourceMappingURL=denialcategorymaster.schema.js.map