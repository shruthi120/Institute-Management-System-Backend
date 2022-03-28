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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimsdataService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const claim_schema_1 = require("../schemas/claim.schema");
const cpt_schema_1 = require("../schemas/cpt.schema");
const uploadfile_service_1 = require("../uploadfile/uploadfile.service");
const payermaster_schema_1 = require("../schemas/payermaster.schema");
let ClaimsdataService = class ClaimsdataService {
    constructor(ClaimModel, CptModel, PayermasterModel, uploadfileService) {
        this.ClaimModel = ClaimModel;
        this.CptModel = CptModel;
        this.PayermasterModel = PayermasterModel;
        this.uploadfileService = uploadfileService;
    }
    groupage(row) {
        var claimdateadd = new Date(row.ClaimDate);
        const agegrp = [
            "0-10days",
            "11-30days",
            "31-60days",
            "61-90days",
            "91-120days",
            "121-180days",
            "181-365days",
        ];
        const difference = Math.ceil(Math.abs(Date.now() - claimdateadd.setDate(claimdateadd.getDate() + 1)) / (1000 * 60 * 60 * 24));
        if (difference <= 10 && difference >= 0) {
            return agegrp[0];
        }
        else if (difference <= 30 && difference >= 11) {
            return agegrp[1];
        }
        else if (difference <= 60 && difference >= 31) {
            return agegrp[2];
        }
        else if (difference <= 90 && difference >= 61) {
            return agegrp[3];
        }
        else if (difference <= 120 && difference >= 91) {
            return agegrp[4];
        }
        else if (difference <= 180 && difference >= 121) {
            return agegrp[5];
        }
        else if (difference <= 365 && difference >= 181) {
            return agegrp[6];
        }
        else {
            return "above 1year";
        }
    }
    async get_payercategory_and_tfl(payerid) {
        var value = await this.PayermasterModel.find({ payer_id: payerid });
        if (value.length != 0) {
            return [(value[0].category_name), (value[0].filling_limit1)];
        }
        else {
            return ["Others", 85];
        }
    }
    async insertBulk(exceldata, name) {
        var arrayToInsertinclaims = [];
        var arrayToInsertincpt = [];
        for (let row of exceldata) {
            if (row.ClaimID) {
                var claimdateadd = new Date(row.ClaimDate);
                var dateofserviceadd = new Date(row.DateOfService);
                var patientdobadd = new Date(row.PatientDOB);
                var result = await this.get_payercategory_and_tfl(row.PayerID);
                const oneRow = {
                    ClaimID: row.ClaimID,
                    ChartID: row.ChartID,
                    MRN: row.MRN,
                    Patient: row.Patient,
                    PatientDOB: patientdobadd.setDate(patientdobadd.getDate() + 1),
                    Physician: row.Physician,
                    ClaimDate: claimdateadd.setDate(claimdateadd.getDate() + 1),
                    Pripayer: row.Pripayer,
                    DateOfService: dateofserviceadd.setDate(dateofserviceadd.getDate() + 1),
                    PrimaryPolicyNo: row.PrimaryPolicyNo,
                    ARClass: row.ARClass,
                    PayerID: row.PayerID,
                    Payercategory: result[0],
                    CPTS: [row.CPTCode],
                    ICD10Code: row.ICD10Code,
                    AgeGrp: this.groupage(row),
                    Age: Math.ceil(Math.abs(Date.now() - claimdateadd.setDate(claimdateadd.getDate() + 1)) /
                        (1000 * 60 * 60 * 24)),
                    TotalBilledAmount: row.BilledAmount,
                    ClaimStatus: "open",
                    Tfl: result[1],
                    Touch: 1,
                    Claimunder: null,
                };
                const forcpt = {
                    CPTCode: row.CPTCode,
                    BilledAmount: row.BilledAmount,
                    Status: row.Status,
                    ClaimID: row.ClaimID,
                };
                arrayToInsertinclaims.push(oneRow);
                arrayToInsertincpt.push(forcpt);
            }
            else if (!row.ClaimID) {
                const index = arrayToInsertinclaims.length - 1;
                arrayToInsertinclaims[index].TotalBilledAmount += row.BilledAmount;
                arrayToInsertinclaims[index].CPTS.push(row.CPTCode);
                const forcpt = {
                    CPTCode: row.CPTCode,
                    BilledAmount: row.BilledAmount,
                    Status: row.Status,
                    ClaimID: arrayToInsertinclaims[index].ClaimID,
                };
                arrayToInsertincpt.push(forcpt);
            }
        }
        await this.ClaimModel.insertMany(arrayToInsertinclaims);
        await this.CptModel.insertMany(arrayToInsertincpt);
        let filename = {
            filename: name,
        };
        await this.uploadfileService.create_uploadfiledata(filename);
    }
    async getclaimperuser(userid) {
        console.log(userid);
        const claims = await this.ClaimModel.aggregate([
            {
                $match: { Claimunder: userid },
            },
            {
                $lookup: {
                    from: "cpts",
                    localField: "ClaimID",
                    foreignField: "ClaimID",
                    as: "cpt",
                },
            },
        ]);
        return claims;
    }
    async getallclaim() {
        const claims = await this.ClaimModel.find({});
        return claims;
    }
};
ClaimsdataService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("Claim")),
    __param(1, mongoose_1.InjectModel("Cpt")),
    __param(2, mongoose_1.InjectModel("Payermaster")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        uploadfile_service_1.UploadfileService])
], ClaimsdataService);
exports.ClaimsdataService = ClaimsdataService;
//# sourceMappingURL=claimsdata.service.js.map