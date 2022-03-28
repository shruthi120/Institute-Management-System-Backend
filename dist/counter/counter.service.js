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
exports.CounterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const counter_schema_1 = require("../schemas/counter.schema");
let CounterService = class CounterService {
    constructor(counterModel) {
        this.counterModel = counterModel;
    }
    async create_counter(req_body) {
        const new_counter = new this.counterModel();
        new_counter._id = req_body._id;
        new_counter.sequence_value = req_body.sequence_value;
        await new_counter.save();
        return new_counter;
    }
    async get_counter(counter_name) {
        const counter = await this.counterModel.findOne({ _id: counter_name });
        return counter;
    }
    async get_all_counters() {
        const counters = await this.counterModel.find();
        return counters;
    }
    async update_counter(req) {
        const counter = await this.counterModel.findByIdAndUpdate(req.params.id, { sequence_value: req.body.sequence_value }, { new: true });
        return counter;
    }
    async delete_counter(counter_name) {
        const counter = await this.counterModel.findByIdAndRemove(counter_name);
        return counter;
    }
    async get_next_sequence_value(counter_name) {
        const counter = await this.counterModel.findByIdAndUpdate(counter_name, { $inc: { sequence_value: 1 } }, { new: true });
        return counter.sequence_value;
    }
};
CounterService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Counter')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CounterService);
exports.CounterService = CounterService;
//# sourceMappingURL=counter.service.js.map