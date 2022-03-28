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
exports.CounterController = void 0;
const common_1 = require("@nestjs/common");
const counter_service_1 = require("./counter.service");
let CounterController = class CounterController {
    constructor(counterService) {
        this.counterService = counterService;
    }
    async create_counter(req, res) {
        const response = await this.counterService.create_counter(req.body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'counter created successfully!',
            counter: response,
        });
    }
    async get_all_counter(res) {
        const response = await this.counterService.get_all_counters();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'List of available counters',
            counters: response,
        });
    }
    async get_counter(req, res) {
        const response = await this.counterService.get_counter(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Counter found',
            counter: response,
        });
    }
    async update_counter(req, res) {
        const response = await this.counterService.update_counter(req);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Counter updated!',
            counter: response,
        });
    }
    async delete_counter(req, res) {
        const response = await this.counterService.delete_counter(req.params.id);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Counter deleted!',
            counter: response,
        });
    }
};
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CounterController.prototype, "create_counter", null);
__decorate([
    common_1.Get('all'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CounterController.prototype, "get_all_counter", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CounterController.prototype, "get_counter", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CounterController.prototype, "update_counter", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CounterController.prototype, "delete_counter", null);
CounterController = __decorate([
    common_1.Controller('counter'),
    __metadata("design:paramtypes", [counter_service_1.CounterService])
], CounterController);
exports.CounterController = CounterController;
//# sourceMappingURL=counter.controller.js.map