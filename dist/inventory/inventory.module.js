"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cpt_schema_1 = require("../schemas/cpt.schema");
const inventory_controller_1 = require("./inventory.controller");
const inventory_service_1 = require("./inventory.service");
const claim_schema_1 = require("../schemas/claim.schema");
const payermaster_schema_1 = require("../schemas/payermaster.schema");
const upload_schema_1 = require("../schemas/upload.schema");
let InventoryModule = class InventoryModule {
};
InventoryModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: claim_schema_1.Claim.name, schema: claim_schema_1.ClaimSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: cpt_schema_1.Cpt.name, schema: cpt_schema_1.CptSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: payermaster_schema_1.Payermaster.name, schema: payermaster_schema_1.PayermasterSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: upload_schema_1.Upload.name, schema: upload_schema_1.UploadSchema }]),
        ],
        controllers: [inventory_controller_1.InventoryController],
        providers: [inventory_service_1.InventoryService],
    })
], InventoryModule);
exports.InventoryModule = InventoryModule;
//# sourceMappingURL=inventory.module.js.map