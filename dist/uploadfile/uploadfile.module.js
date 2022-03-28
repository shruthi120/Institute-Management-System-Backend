"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadfileModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const upload_schema_1 = require("../schemas/upload.schema");
const claim_schema_1 = require("../schemas/claim.schema");
const cpt_schema_1 = require("../schemas/cpt.schema");
const payermaster_schema_1 = require("../schemas/payermaster.schema");
const uploadfile_controller_1 = require("./uploadfile.controller");
const uploadfile_service_1 = require("./uploadfile.service");
const counter_service_1 = require("../counter/counter.service");
const counter_controller_1 = require("../counter/counter.controller");
const denialcategorymaster_schema_1 = require("../schemas/denialcategorymaster.schema");
const counter_schema_1 = require("../schemas/counter.schema");
let UploadfileModule = class UploadfileModule {
};
UploadfileModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: upload_schema_1.Upload.name, schema: upload_schema_1.UploadSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: claim_schema_1.Claim.name, schema: claim_schema_1.ClaimSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: cpt_schema_1.Cpt.name, schema: cpt_schema_1.CptSchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: payermaster_schema_1.Payermaster.name, schema: payermaster_schema_1.PayermasterSchema },
            ]),
            mongoose_1.MongooseModule.forFeature([{ name: counter_schema_1.Counter.name, schema: counter_schema_1.CounterSchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: denialcategorymaster_schema_1.Denialcategorymaster.name, schema: denialcategorymaster_schema_1.DenialcategorymasterSchema },
            ]),
        ],
        controllers: [uploadfile_controller_1.UploadfileController],
        providers: [uploadfile_service_1.UploadfileService, counter_service_1.CounterService],
    })
], UploadfileModule);
exports.UploadfileModule = UploadfileModule;
//# sourceMappingURL=uploadfile.module.js.map