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
exports.ARlogSchema = exports.ARlog = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let ARlog = class ARlog {
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], ARlog.prototype, "User", void 0);
__decorate([
    mongoose_1.Prop({ default: Date.now }),
    __metadata("design:type", Date)
], ARlog.prototype, "Eventdate", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], ARlog.prototype, "Status", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], ARlog.prototype, "ClaimID", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], ARlog.prototype, "Comments", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", Date)
], ARlog.prototype, "Nextdate", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], ARlog.prototype, "Module", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], ARlog.prototype, "Payertype", void 0);
ARlog = __decorate([
    mongoose_1.Schema()
], ARlog);
exports.ARlog = ARlog;
exports.ARlogSchema = mongoose_1.SchemaFactory.createForClass(ARlog);
//# sourceMappingURL=ARlog.schema.js.map