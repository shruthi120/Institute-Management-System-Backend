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
exports.ClaimService = void 0;
const claim_schema_1 = require("../schemas/claim.schema");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const claim_schema_2 = require("../schemas/claim.schema");
const ARlog_schema_1 = require("../schemas/ARlog.schema");
const cpt_schema_1 = require("../schemas/cpt.schema");
const console_1 = require("console");
const billingprovider_schema_1 = require("../schemas/billingprovider.schema");
let ClaimService = class ClaimService {
    constructor(claimModel, arlogModel, CptModel) {
        this.claimModel = claimModel;
        this.arlogModel = arlogModel;
        this.CptModel = CptModel;
    }
    async managepaymentUpdate(claimid, body, cptcode) {
        const cpt = await this.CptModel.findOneAndUpdate({ CPTCode: cptcode, ClaimID: claimid }, {
            $set: {
                check_no: body.check_no,
                TotalBalanceAmount: body.TotalBalanceAmount,
                Source: body.Source,
                InsuranceAdjustment: body.InsuranceAdjustment,
                InsurancePayment: body.InsurancePayment,
                CoPayment: body.CoPayment,
                ICD: body.ICD,
                PaymentMode: body.PaymentMode,
                Provider: body.Provider,
                amountPaid: body.amountPaid,
                PRT: body.PRT,
                SEC: body.SEC,
                Charge: body.Charge,
                effectiveDate: body.effectiveDate,
                submittedAmount: body.submittedAmount,
                submittedUnits: body.submittedUnits,
            },
        });
    }
    async update_claimchange(id, body) {
        const claim = await this.claimModel.findOneAndUpdate({ _id: id }, {
            $set: {
                MRN: body.MRN,
                PatientFirstName: body.PatientFirstName,
                PatientLastName: body.PatientLastName,
                PatientDOB: body.PatientDOB,
                Physician: body.Physician,
                ClaimDate: body.ClaimDate,
                Pripayer: body.Pripayer,
                DateOfService: body.DateOfService,
                Payercategory: body.Payercategory,
                Age: body.Age,
                AgeGrp: body.AgeGrp,
                TotalBalanceAmount: body.TotalBalanceAmount,
                TotalAmountPaid: body.TotalAmountPaid,
                CPTS: body.CPTS,
                Tfl: body.Tfl,
                Claimunder: body.Claimunder,
                ClaimCategory: body.ClaimCategory,
                claimSubCategory: body.claimSubCategory,
                Overallcptstatus: body.Overallcptstatus,
                CreatedAt: body.CreatedAt,
                type: body.type,
                Reason: body.Reason,
                Followup_date: body.Followup_date,
                Location: body.Location,
                controlNumber: body.controlNumber,
                tradingPartnerServiceId: body.tradingPartnerServiceId,
                payerIdentification: body.payerIdentification,
                Pripayerphone: body.Pripayerphone,
                TaxID: body.TaxID,
                ServiceProvider: body.ServiceProvider,
                Npi: body.Npi,
                ServiceProviderType: body.ServiceProviderType,
                BillingProviderType: body.BillingProviderType,
                Gender: body.Gender,
                BeginingDOS: body.BeginingDOS,
                EndDOS: body.EndDOS,
                statusCategoryCode: body.statusCategoryCode,
                statusCategoryCodeValue: body.statusCategoryCodeValue,
                statusCode: body.statusCode,
                statusCodeValue: body.statusCodeValue,
                effectiveDate: body.effectiveDate,
                checkIssueDate: body.checkIssueDate,
                PrimaryPolicyNo: body.PrimaryPolicyNo,
                ARClass: body.ARClass,
                PayerID: body.PayerID,
                ICD10Code: body.ICD10Code,
                TotalBilledAmount: body.TotalBilledAmount,
                ClaimStatus: body.ClaimStatus,
                Touch: body.Touch,
                OverallClaimStatus: body.OverallClaimStatus,
                checkNumber: body.checkNumber,
                trackingNumber: body.trackingNumber,
                paidDate: body.paidDate,
                ClaimID: body.ClaimID,
            },
        });
    }
    async get_by_claimId(claimid) {
        const claims = await this.claimModel.aggregate([
            {
                $match: { ClaimID: claimid },
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
    async addcpt(body) {
        const new_denialmaster = new this.CptModel(body);
        await new_denialmaster.save();
        const claim = await this.claimModel.findOne({ ClaimID: body.ClaimID });
        const cpt = new this.CptModel();
        const cptcode = cpt.CPTCode;
        let arr = [];
        arr.push(cptcode);
        if (claim.ClaimID == body.ClaimID) {
            claim.CPTS = body.CPTCode;
            await claim.save();
        }
        return [new_denialmaster];
    }
    async getallclaim() {
        const claims = await this.claimModel.find({});
        return claims;
    }
    async getextradetails() {
        let arraycpt = [];
        var resultarray = [];
        var servicearray = [];
        let cptArr = [];
        let cptdata = [];
        let extradetails = [
            {
                controlNumber: "000000001",
                tradingPartnerServiceId: "60054",
                payer: {
                    organizationName: "AETNA",
                    payerIdentification: "60054",
                    contactInformation: {
                        name: "Aetna",
                        phone: "8006240756",
                    },
                },
                providers: [
                    {
                        organizationName: "ADVANCED PULMONARY SLEEP ASSO",
                        taxId: "1891318291",
                        providerType: "BillingProvider",
                    },
                    {
                        organizationName: "ADVANCED PULMONARY SLEEP ASSO",
                        npi: "1891318291",
                        providerType: "ServiceProvider",
                    },
                ],
                subscriber: {
                    memberId: "MEBFH4QP",
                    lastName: "MCKIM",
                },
                dependent: {
                    firstName: "JOANNE",
                    lastName: "MCKIM",
                },
                claims: [
                    {
                        claimStatus: {
                            statusCategoryCode: "F1",
                            statusCategoryCodeValue: "Finalized/Payment-The claim/line has been paid.",
                            statusCode: "66",
                            statusCodeValue: "Payment reflects usual and customary charges.",
                            effectiveDate: "20220119",
                            submittedAmount: "300",
                            amountPaid: "150.65",
                            paidDate: "20211231",
                            checkIssueDate: "20220106",
                            checkNumber: "160103220304620",
                            trackingNumber: "0001",
                            claimServiceDate: "20211216-20211216",
                            tradingPartnerClaimNumber: "211231E5954500",
                            patientAccountNumber: "C1C00WBH",
                        },
                        serviceDetails: [
                            {
                                service: {
                                    serviceIdQualifierCode: "HC",
                                    serviceIdQualifier: "Health Care Financing Administration Common Procedural Coding System (HCPCS) Codes",
                                    procedureId: "99223",
                                    submittedAmount: "300",
                                    amountPaid: "150.65",
                                    submittedUnits: "1",
                                },
                                status: {
                                    statusCategoryCode: "F1",
                                    statusCategoryCodeValue: "Finalized/Payment-The claim/line has been paid.",
                                    statusCode: "66",
                                    statusCodeValue: "Payment reflects usual and customary charges.",
                                    effectiveDate: "20220119",
                                },
                            },
                            {
                                service: {
                                    serviceIdQualifierCode: "HC",
                                    serviceIdQualifier: "Hey Codes",
                                    procedureId: "99500",
                                    submittedAmount: "300",
                                    amountPaid: "150.65",
                                    submittedUnits: "1",
                                },
                                status: {
                                    statusCategoryCode: "F1",
                                    statusCategoryCodeValue: "Finalized/Payment-The claim/line has been paid.",
                                    statusCode: "66",
                                    statusCodeValue: "Payment reflects usual and customary charges.",
                                    effectiveDate: "20220119",
                                },
                            },
                        ],
                    },
                ],
                reassociationKey: "000000001",
                status: "success",
                meta: {
                    submitterId: "396226",
                    senderId: "MN_OBO_Health_Inc_APP",
                    billerId: "396226",
                    traceId: "35b072a4-e55b-b1a4-1b63-cf6b9dca3786",
                    applicationMode: "production",
                },
            },
        ];
        for (let i = 0; i < extradetails.length; i++) {
            if (extradetails[i].claims[i].serviceDetails.length > 1) {
                let arrServiceDetail = extradetails[i].claims[i].serviceDetails;
                for (let data of arrServiceDetail) {
                    const serviceData = {
                        serviceIdQualifierCode: data.service.serviceIdQualifierCode,
                        serviceIdQualifier: data.service.serviceIdQualifier,
                        CPTCode: data.service.procedureId,
                        submittedAmount: data.service.submittedAmount,
                        amountPaid: data.service.amountPaid,
                        submittedUnits: data.service.submittedUnits,
                        statusCategoryCode: data.status.statusCategoryCode,
                        statusCategoryCodeValue: data.status.statusCategoryCodeValue,
                        statusCode: data.status.statusCode,
                        statusCodeValue: data.status.statusCodeValue,
                        effectiveDate: data.status.effectiveDate,
                    };
                    const cpts = data.service.procedureId;
                    let dataarray = [];
                    dataarray.push(await this.CptModel.insertMany(serviceData));
                    console_1.default.log(dataarray);
                    for (let i = 0; i < dataarray.length; i++) {
                        dataarray[i].map((data) => cptdata.push(data._id));
                    }
                    cptArr.push(cpts);
                    servicearray.push(serviceData);
                    console_1.default.log(cptdata);
                }
            }
            console_1.default.log("CPT Code", cptArr);
            console_1.default.log("data", servicearray);
            await this.claimModel.insertMany(resultarray);
            return [cptArr, resultarray, servicearray];
        }
    }
};
ClaimService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("Claim")),
    __param(1, mongoose_1.InjectModel("ARlog")),
    __param(2, mongoose_1.InjectModel("Cpt")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], ClaimService);
exports.ClaimService = ClaimService;
//# sourceMappingURL=claim.service.js.map