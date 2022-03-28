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
exports.CptmasterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cptmaster_schema_1 = require("../../schemas/cptmaster.schema");
let CptmasterService = class CptmasterService {
    constructor(cptmasterModel) {
        this.cptmasterModel = cptmasterModel;
    }
    async create_cptmaster(req_body) {
        const new_cptmaster = new this.cptmasterModel(req_body);
        return await new_cptmaster.save();
    }
    async get_cptmaster() {
        const cptmaster = await this.cptmasterModel.find({});
        return cptmaster;
    }
    async update_cptmaster(id, body) {
        const cptmaster = await this.cptmasterModel.findByIdAndUpdate(id, body, {
            new: true,
        });
        return cptmaster;
    }
    async delete_cptmaster(id) {
        const cptmaster = await this.cptmasterModel.findByIdAndDelete(id);
        return cptmaster;
    }
    async insertBulk(exceldata, name) {
        var arrayToInsertincpt = [];
        for (let row of exceldata) {
            const oneRow = {
                cpt_code: row.Code,
                description: row.CPT_DESCRIPTION,
                unit: row.Units,
                Amount: row.Amount,
            };
            arrayToInsertincpt.push(oneRow);
        }
        await this.cptmasterModel.insertMany(arrayToInsertincpt);
    }
    async advancedcptmastersearch(obj) {
        let value = [];
        for (let x in obj) {
            value.push(obj[x]);
        }
        console.log("obj", obj);
        console.log("values", value);
        if (value.length <= 4) {
            const cpt = await this.cptmasterModel.find({
                $and: [obj],
            });
            return cpt;
        }
    }
};
CptmasterService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("Cptmaster")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CptmasterService);
exports.CptmasterService = CptmasterService;
//# sourceMappingURL=cptmaster.service.js.map