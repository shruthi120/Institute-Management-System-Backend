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
exports.Eligibilityservice = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const eligibility_schema_1 = require("../schemas/eligibility.schema");
const axios_1 = require("axios");
const payermaster_schema_1 = require("../schemas/payermaster.schema");
const claim_schema_1 = require("../schemas/claim.schema");
let Eligibilityservice = class Eligibilityservice {
    constructor(eligibilityModel, PayermasterModel, ClaimModel) {
        this.eligibilityModel = eligibilityModel;
        this.PayermasterModel = PayermasterModel;
        this.ClaimModel = ClaimModel;
    }
    async eligibilityreport(body) {
        var notinserted = 0;
        var inserted = 0;
        var isskipped = false;
        const payerid = body.PayerID;
        const taxid = body.TaxID;
        const npi = body.Npi;
        const dob = body.DOB;
        const beginDOS = body.beginingDateOfService;
        const endDOS = body.endDateOfService;
        const data = {
            tradingPartnerServiceId: payerid,
            providers: [
                {
                    organizationName: body.organizationName,
                    taxId: taxid,
                    providerType: body.BillingProviderType,
                },
                {
                    organizationName: body.ServiceProvider,
                    npi: npi,
                    providerType: body.ServiceProviderType,
                },
            ],
            subscriber: {
                memberId: body.MemberID,
                firstName: body.FirstName,
                lastName: body.LastName,
                gender: body.Gender,
                dateOfBirth: dob,
            },
            encounter: {
                beginningDateOfService: beginDOS,
                endDateOfService: endDOS,
            },
        };
        await this.get_status(data);
        inserted += 1;
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
    async get_status(data) {
        const token = await this.get_token();
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        const res = await axios_1.default
            .post(`https://apigw.changehealthcare.com/medicalnetwork/eligibility/v3`, data, {
            headers: headers,
        })
            .then(async (res) => {
            console.log("response", JSON.stringify(res.data));
        })
            .catch((err) => {
            console.log(err);
            return err;
        });
    }
};
Eligibilityservice = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("Eligibility")),
    __param(1, mongoose_1.InjectModel("Payermaster")),
    __param(2, mongoose_1.InjectModel("Claim")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], Eligibilityservice);
exports.Eligibilityservice = Eligibilityservice;
//# sourceMappingURL=eligibility.service.js.map