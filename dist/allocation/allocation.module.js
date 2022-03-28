"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllocationModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const claim_schema_1 = require("../schemas/claim.schema");
const allocation_controller_1 = require("./allocation.controller");
const allocation_service_1 = require("./allocation.service");
let AllocationModule = class AllocationModule {
};
AllocationModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: claim_schema_1.Claim.name, schema: claim_schema_1.ClaimSchema }]),
        ],
        controllers: [allocation_controller_1.AllocationController],
        providers: [allocation_service_1.AllocationService],
    })
], AllocationModule);
exports.AllocationModule = AllocationModule;
//# sourceMappingURL=allocation.module.js.map