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
exports.UserDetailsSchema = exports.UserDetails = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let UserDetails = class UserDetails {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "UserId", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "First", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "Last", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "Idnumber", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "Speciality", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "SubSpeciality", void 0);
__decorate([
    mongoose_1.Prop({ enum: ['Yes', 'No'] }),
    __metadata("design:type", String)
], UserDetails.prototype, "Physician", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "Password", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "Privilege", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "Telephone1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "Cellphone", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "DeaNumber", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "Email", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "SSN", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "NPI", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "FedTaxId", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "LinkPhysician", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "Dashboard", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "PrevilegedSlot", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "To", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "Telephone2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "Department", void 0);
__decorate([
    mongoose_1.Prop({ enum: ['Enable', 'Disable'] }),
    __metadata("design:type", String)
], UserDetails.prototype, "Status", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], UserDetails.prototype, "PrimaryPhysician", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], UserDetails.prototype, "Roleschedulable", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], UserDetails.prototype, "Signencounter", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], UserDetails.prototype, "Carecoordinator", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], UserDetails.prototype, "ShowClaims", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], UserDetails.prototype, "Reportgallery", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], UserDetails.prototype, "AllowBTG", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], UserDetails.prototype, "AllowBookingfromPHR", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], UserDetails.prototype, "AllowMultilocationBooking", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], UserDetails.prototype, "BypassIPsecurity", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], UserDetails.prototype, "ManagePhysicianSchedule", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], UserDetails.prototype, "OTP", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "MedicarePin", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "MedicaidPin", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "TricarePin", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "BluecrossPin", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "CommercialPin", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "PROPin", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "HMOPin", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "UPin", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "CLIANumber", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "TATNo", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "Taxonomycode", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "CPONo", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "Mammography", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "WCBAuthorizationNo", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "WCBRatingCode", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "DefaultSelfpayamount", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "SecurityQuestion", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "SpecifyQuestion", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "Accreditation", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "LicenseNo", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserDetails.prototype, "State", void 0);
UserDetails = __decorate([
    mongoose_1.Schema()
], UserDetails);
exports.UserDetails = UserDetails;
exports.UserDetailsSchema = mongoose_1.SchemaFactory.createForClass(UserDetails);
//# sourceMappingURL=userdetails.schema.js.map