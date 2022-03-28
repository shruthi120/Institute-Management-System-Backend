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
exports.UploadfileService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const upload_schema_1 = require("../schemas/upload.schema");
const counter_schema_1 = require("../schemas/counter.schema");
const claim_schema_1 = require("../schemas/claim.schema");
const cpt_schema_1 = require("../schemas/cpt.schema");
const payermaster_schema_1 = require("../schemas/payermaster.schema");
const counter_service_1 = require("../counter/counter.service");
const denialcategorymaster_schema_1 = require("../schemas/denialcategorymaster.schema");
const axios_1 = require("axios");
const denialcategorymaster_schema_2 = require("../schemas/denialcategorymaster.schema");
let UploadfileService = class UploadfileService {
    constructor(uploadModel, DenialCategorymasterModel, ClaimModel, CptModel, PayermasterModel, CounterModel, counterService) {
        this.uploadModel = uploadModel;
        this.DenialCategorymasterModel = DenialCategorymasterModel;
        this.ClaimModel = ClaimModel;
        this.CptModel = CptModel;
        this.PayermasterModel = PayermasterModel;
        this.CounterModel = CounterModel;
        this.counterService = counterService;
    }
    groupage(row) {
        var claimdate = new Date(row.ClaimDate);
        const agegrp = [
            "0-10days",
            "11-30days",
            "31-60days",
            "61-90days",
            "91-120days",
            "121-180days",
            "181-365days",
            "above 1year",
        ];
        const difference = Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate() + 1)) /
            (1000 * 60 * 60 * 24));
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
            return agegrp[7];
        }
    }
    async get_payercategory_and_tfl(payerid) {
        var value = await this.PayermasterModel.find({ payer_id: payerid });
        if (value.length != 0) {
            return [value[0].category_name, value[0].Tfl, value[0].type];
        }
        else {
            return ["Others", 365];
        }
    }
    async chnagehealthcareapi(exceldata, name) {
        var arrayToInsertinclaims = [];
        var arrayToInsertincpt = [];
        var notinserted = 0;
        var inserted = 0;
        var isskipped = false;
        for (let row of exceldata) {
            if (row.ClaimID) {
                isskipped = false;
                const claimexist = await this.ClaimModel.findOne({
                    ClaimID: row.ClaimID,
                });
                if (claimexist) {
                    notinserted += 1;
                    isskipped = true;
                }
                else {
                    let value = await this.PayermasterModel.findOne({
                        payer_id: row.PayerID,
                    });
                    if (value.type === "Web") {
                        if (row.ClaimID) {
                            const controlnumber = String(await this.counterService.get_next_sequence_value("Control_number"));
                            const payerid = String(row.PayerID);
                            const taxid = String(row.TaxID);
                            const npi = String(row.Npi);
                            const dob = String(row.DOB);
                            const beginDOS = String(row.BeginingDOS);
                            const endDOS = String(row.EndDOS);
                            const trackid = String(await this.counterService.get_next_sequence_value("Tracking_number"));
                            const body = {
                                controlNumber: controlnumber,
                                tradingPartnerServiceId: payerid,
                                providers: [
                                    {
                                        organizationName: row.organizationName,
                                        taxId: taxid,
                                        providerType: row.BillingProviderType,
                                    },
                                    {
                                        organizationName: row.ServiceProvider,
                                        npi: npi,
                                        providerType: row.ServiceProviderType,
                                    },
                                ],
                                subscriber: {
                                    memberId: row.MemberID,
                                    firstName: row.FirstName,
                                    lastName: row.LastName,
                                    gender: row.Gender,
                                    dateOfBirth: dob,
                                },
                                encounter: {
                                    beginningDateOfService: beginDOS,
                                    endDateOfService: endDOS,
                                    trackingNumber: trackid,
                                },
                            };
                            await this.get_status(body, row.Patientnumber, row.Location, row);
                            inserted += 1;
                        }
                    }
                    else {
                        console.log("Inside");
                        this.insertBulk(row, name);
                        inserted += 1;
                    }
                }
            }
        }
    }
    async get_token() {
        const body = {
            client_id: "tSfZ6ZOoG6TbUAK9ANqSnOQp3jvgHzi1",
            client_secret: "WsTk8IcRTVCwfe35",
            grant_type: "client_credentials",
        };
        const res = await axios_1.default.post(`https://apigw.changehealthcare.com/apip/auth/v2/token`, body);
        return res.data.access_token;
    }
    async get_status(body, claimnumber, location, row) {
        const token = await this.get_token();
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        const res = await axios_1.default
            .post(`https://apigw.changehealthcare.com/medicalnetwork/claimstatus/v2`, body, {
            headers: headers,
        })
            .then(async (res) => {
            console.log("response", JSON.stringify(res.data));
            let adding_claimdetails = res.data;
            adding_claimdetails.claimNumber = claimnumber;
            adding_claimdetails.location = location;
            const data = [];
            data.push(adding_claimdetails);
            await this.insertBulkchangehealthcaredata(data, claimnumber, row);
        })
            .catch((err) => {
            console.log(err);
            return err;
        });
    }
    async insertBulkchangehealthcaredata(data, claimnumber, row) {
        var _a, _b, _c, _d;
        const taxid = String(row.TaxID);
        const npi = String(row.Npi);
        const dob = String(row.DOB);
        const beginDOS = String(row.BeginingDOS);
        const endDOS = String(row.EndDOS);
        console.log(claimnumber);
        const claimdate = new Date(row.ClaimDate);
        const result = await this.get_payercategory_and_tfl(row.PayerID);
        let cptdata = [];
        let arraydata = [];
        let claimData = [];
        let resultData = [];
        let result1;
        let result2;
        let result3;
        for (let i = 0; i < data.length; i++) {
            console.log("9999999999999999", data[i]);
            let aar = [];
            if (((_b = (_a = data[i]) === null || _a === void 0 ? void 0 : _a.claims[i]) === null || _b === void 0 ? void 0 : _b.serviceDetails[i]) !== "undefined") {
                aar.push((_d = (_c = data[i]) === null || _c === void 0 ? void 0 : _c.claims[i]) === null || _d === void 0 ? void 0 : _d.serviceDetails[i]);
                console.log("arrrr", aar);
                for (let dat of aar) {
                    let cptstatusfetch;
                    console.log(dat);
                    if (dat.status[0].statusCategoryCode === "F2") {
                        cptstatusfetch = await this.DenialCategorymasterModel.findOne({
                            $and: [
                                { statusCategoryCode: dat.status[0].statusCategoryCode },
                                { statusCode: dat.status[0].statusCode },
                            ],
                        });
                    }
                    else {
                        cptstatusfetch = await this.DenialCategorymasterModel.findOne({
                            statusCategoryCode: dat.status[0].statusCategoryCode,
                        });
                    }
                    let CPTdata = {
                        serviceIdQualifierCode: dat.service.serviceIdQualifierCode,
                        serviceIdQualifier: dat.service.serviceIdQualifier,
                        CPTCode: dat.service.procedureId,
                        submittedAmount: dat.service.submittedAmount,
                        amountPaid: dat.service.amountPaid,
                        submittedUnits: dat.service.submittedUnits,
                        statusCategoryCode: dat.status[0].statusCategoryCode,
                        statusCategoryCodeValue: dat.status[0].statusCategoryCodeValue,
                        statusCode: dat.status[0].statusCode,
                        statusCodeValue: dat.status[0].statusCodeValue,
                        effectiveDate: dat.status[0].effectiveDate,
                        ClaimID: row.ClaimID,
                        claimSubCategory: cptstatusfetch.claimSubCategory,
                        ClaimStatus: cptstatusfetch.claimStatus,
                        Reason: cptstatusfetch.reason,
                    };
                    console.log("CPTDATA", CPTdata);
                    const dataarray = [];
                    dataarray.push(await this.CptModel.insertMany(CPTdata));
                    for (let i = 0; i < dataarray.length; i++) {
                        dataarray[i].map((data) => cptdata.push(data._id));
                    }
                }
            }
            for (let i = 0; i < data.length; i++) {
                let aar = [];
                aar.push(data[i].claims[i].claimStatus);
                for (let dat of aar) {
                    let claimstatusfetch;
                    if (dat.statusCategoryCode === "F2") {
                        claimstatusfetch = await this.DenialCategorymasterModel.findOne({
                            $and: [
                                { statusCategoryCode: dat.statusCategoryCode },
                                { statusCode: dat.statusCode },
                            ],
                        });
                    }
                    else {
                        claimstatusfetch = await this.DenialCategorymasterModel.findOne({
                            statusCategoryCode: dat.statusCategoryCode,
                        });
                    }
                    let claimstatus = {
                        statusCategoryCode: dat.statusCategoryCode,
                        statusCategoryCodeValue: dat.statusCategoryCodeValue,
                        statusCode: dat.statusCode,
                        statusCodeValue: dat.statusCodeValue,
                        effectiveDate: dat.effectiveDate,
                        TotalBilledAmount: dat.submittedAmount,
                        TotalAmountPaid: dat.amountPaid,
                        paidDate: dat.paidDate,
                        checkIssueDate: dat.checkIssueDate,
                        checkNumber: dat.checkNumber,
                        trackingNumber: dat.trackingNumber,
                        DateOfService: row.DOS,
                        tradingPartnerClaimNumber: dat.tradingPartnerClaimNumber,
                        patientAccountNumber: dat.patientAccountNumber,
                        ClaimCategory: claimstatusfetch.claimCategory,
                        claimSubCategory: claimstatusfetch.claimSubCategory,
                        ClaimStatus: claimstatusfetch.claimStatus,
                        Reason: claimstatusfetch.reason,
                    };
                    result1 = claimstatus;
                }
            }
            for (let i = 0; i < data.length; i++) {
                let aar = [];
                aar.push(data[i]);
                for (let dat of aar) {
                    let claimdata = {
                        MRN: row.MRN,
                        ClaimID: row.ClaimID,
                        PatientDOB: dob,
                        Npi: npi,
                        EndDOS: endDOS,
                        BeginingDOS: beginDOS,
                        Gender: row.Gender,
                        controlNumber: dat.controlNumber,
                        tradingPartnerServiceId: dat.tradingPartnerServiceId,
                        Pripayer: dat.payer.organizationName,
                        PayerID: dat.payer.payerIdentification,
                        PripayerName: dat.payer.contactInformation.name,
                        phone: dat.payer.contactInformation.phone,
                        BillingProviderName: row.organizationName,
                        ServiceProviderName: row.ServiceProvider,
                        TaxID: taxid,
                        BillingProviderType: row.BillingProviderType,
                        ServiceProviderType: row.ServiceProviderType,
                        Physician: row.Physician,
                        PrimaryPolicyNo: dat.subscriber.memberId,
                        PatientFirstName: dat.subscriber.firstName,
                        PatientLastName: dat.subscriber.lastName,
                        CPTS: cptdata,
                        claimNumber: claimnumber,
                        Payercategory: result[0],
                        AgeGrp: this.groupage(row),
                        Age: Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate() + 1)) /
                            (1000 * 60 * 60 * 24)),
                        Tfl: result[1],
                        Followup_date: new Date(),
                        type: result[2],
                        claimunder: null,
                        overallClaimStatus: "TO-DO",
                    };
                    result2 = claimdata;
                    result3 = Object.assign(Object.assign({}, result1), result2);
                    let dataarrayy = [];
                    dataarrayy.push(await this.ClaimModel.insertMany(result3));
                }
            }
        }
    }
    async insertBulk(row, name) {
        var arrayToInsertinclaimsmodal = [];
        var arrayToInsertincptmodal = [];
        var notinserted = 0;
        var inserted = 0;
        var isskipped = false;
        if (row.ClaimID) {
            isskipped = false;
            const claimexist = await this.ClaimModel.findOne({
                ClaimID: row.ClaimID,
            });
            if (claimexist) {
                isskipped = true;
            }
            else {
                if (row.ClaimID) {
                    var claimdate = new Date(row.ClaimDate);
                    var dateofservice = new Date(row.DOS);
                    var patientdob = new Date(row.DOB);
                    const taxid = String(row.TaxID);
                    const npi = String(row.Npi);
                    const beginDOS = String(row.BeginingDOS);
                    const endDOS = String(row.EndDOS);
                    var result = await this.get_payercategory_and_tfl(row.PayerID);
                    const oneRow = {
                        ClaimID: row.ClaimID,
                        ChartID: row.ChartID,
                        MRN: row.MRN,
                        Gender: row.Gender,
                        PatientFirstName: row.FirstName,
                        PatientLastName: row.LastName,
                        Npi: npi,
                        EndDOS: endDOS,
                        BeginingDOS: beginDOS,
                        PatientDOB: patientdob.setDate(patientdob.getDate() + 1),
                        Physician: row.Physician,
                        TaxID: taxid,
                        ClaimDate: claimdate.setDate(claimdate.getDate() + 1),
                        Pripayer: row.Pripayer,
                        DateOfService: dateofservice.setDate(dateofservice.getDate() + 1),
                        PrimaryPolicyNo: row.MemberID,
                        ARClass: row.ARClass,
                        PayerID: row.PayerID,
                        Payercategory: result[0],
                        CPTS: [],
                        ICD10Code: row.ICD10Code,
                        AgeGrp: this.groupage(row),
                        Age: Math.ceil(Math.abs(Date.now() - claimdate.setDate(claimdate.getDate() + 1)) /
                            (1000 * 60 * 60 * 24)),
                        TotalBilledAmount: row.BilledAmount,
                        TotalBalanceAmount: "",
                        TotalAmountpaid: 0,
                        ClaimStatus: "",
                        OverallClaimstatus: "Notcompleted",
                        Tfl: result[1],
                        Touch: 0,
                        Claimunder: null,
                        Followup_date: new Date(),
                        BillingProviderName: row.organizationName,
                        ServiceProviderName: row.ServiceProvider,
                        BillingProviderType: row.BillingProviderType,
                        ServiceProviderType: row.ServiceProviderType,
                        type: result[2],
                    };
                    arrayToInsertinclaimsmodal.push(oneRow);
                }
            }
        }
        await this.ClaimModel.insertMany(arrayToInsertinclaimsmodal);
    }
    async create_uploadfiledata(req_body) {
        const new_file = new this.uploadModel(req_body);
        await new_file.save();
    }
    async get_all_uploads() {
        const file = await this.uploadModel.find({});
        return file;
    }
    async delete_file(id) {
        const file = await this.uploadModel.findByIdAndDelete(id);
        return file;
    }
    async get_files_by_date(val1, val2) {
        let from = new Date(val1);
        let to = new Date(val2);
        const file = await this.uploadModel.find({
            $and: [{ createdAt: { $lte: to } }, { createdAt: { $gte: from } }],
        });
        return file;
    }
};
UploadfileService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("Upload")),
    __param(1, mongoose_1.InjectModel("Denialcategorymaster")),
    __param(2, mongoose_1.InjectModel("Claim")),
    __param(3, mongoose_1.InjectModel("Cpt")),
    __param(4, mongoose_1.InjectModel("Payermaster")),
    __param(5, mongoose_1.InjectModel("Counter")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        counter_service_1.CounterService])
], UploadfileService);
exports.UploadfileService = UploadfileService;
//# sourceMappingURL=uploadfile.service.js.map