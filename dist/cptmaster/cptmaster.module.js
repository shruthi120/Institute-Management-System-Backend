"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CptmasterModule = void 0;
const common_1 = require("@nestjs/common");
const cptmaster_controller_1 = require("./cptmaster.controller");
const cptmaster_service_1 = require("./cptmaster.service");
const mongoose_1 = require("@nestjs/mongoose");
const counter_service_1 = require("../counter/counter.service");
const counter_schema_1 = require("../schemas/counter.schema");
const cptmaster_schema_1 = require("../schemas/cptmaster.schema");
const modifier_schema_1 = require("../schemas/modifier.schema");
let CptmasterModule = class CptmasterModule {
};
CptmasterModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: cptmaster_schema_1.Cptmaster.name, schema: cptmaster_schema_1.CptmasterSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: modifier_schema_1.Modifier.name, schema: modifier_schema_1.ModifierSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: counter_schema_1.Counter.name, schema: counter_schema_1.CounterSchema }]),
        ],
        controllers: [cptmaster_controller_1.CptmasterController],
        providers: [cptmaster_service_1.CptmasterService, counter_service_1.CounterService]
    })
], CptmasterModule);
exports.CptmasterModule = CptmasterModule;
//# sourceMappingURL=cptmaster.module.js.map