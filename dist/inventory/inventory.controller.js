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
exports.InventoryController = void 0;
const common_1 = require("@nestjs/common");
const inventory_service_1 = require("./inventory.service");
const jwt_access_guard_1 = require("../auth/jwt-access-guard");
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    async group_helper(response, _id) {
        let finalresponse = [];
        for (let item of _id) {
            if (!exist(item, response)) {
                const val = addagestructure(item);
                finalresponse.push(val);
            }
            else {
                const val = response.filter((obj) => {
                    return obj._id === item;
                });
                finalresponse.push(val[0]);
            }
        }
        function exist(item, response) {
            return response.some(function (el) {
                return el._id === item;
            });
        }
        function addagestructure(grp) {
            return {
                _id: grp,
                totalamount: 0,
                totalcount: 0,
            };
        }
        return finalresponse;
    }
    async getall(req, res) {
        const response = await this.inventoryService.getall();
        const _id = [
            "0-30days",
            "31-60days",
            "61-90days",
            "91-120days",
            "121-180days",
            "181-365days",
            "365+days",
        ];
        const finalresponse = await this.group_helper(response[2], _id);
        const value = {
            cptwise: response[0],
            pripayerwise: response[1],
            agegrpwise: finalresponse,
            payercategorywise: response[3],
            pripayamount: response[4],
            agewise0_30: response[5],
            agewise31_60: response[6],
            agewise61_90: response[7],
            agewise91_120: response[8],
            agewise121_180: response[9],
            agewise181_365: response[10],
            agewiseabove365days: response[11],
        };
        return res.status(common_1.HttpStatus.OK).json({
            message: "response from inventory",
            inventory: value,
        });
    }
    async account_receivables(req, res) {
        const response = await this.inventoryService.overallcount();
        const data = {
            Grandamount: response[0],
            Web: response[1],
            IVR: response[2],
            Manual: response[3],
            accountrecievable: response[4],
            denialcount: response[5],
        };
        return res.status(common_1.HttpStatus.OK).json({
            message: "Get  total claims and total amount",
            overallcount: data,
        });
    }
    async getcharges_collections(req, res) {
        const response = await this.inventoryService.getcharges_collections();
        return res.status(common_1.HttpStatus.OK).json({
            message: "Monthly charges and collections",
            chargescollections: response,
        });
    }
    async get_insert(req, res) {
        const response = await this.inventoryService.get_claim_insertdata(req.query.year);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Monthly inserted",
            data: response,
        });
    }
    async getby_touch(req, res) {
        const response = await this.inventoryService.getby_touch();
        return res.status(common_1.HttpStatus.OK).json({
            message: "Get  total claims",
            touch: response,
        });
    }
    async get_monthlycharges(req, res) {
        const response = await this.inventoryService.get_monthlycharges();
        return res.status(common_1.HttpStatus.OK).json({
            message: "Get  total claims",
            monthlycharges: response,
        });
    }
    async get_daywise(req, res) {
        const response = await this.inventoryService.get_daywise();
        return res.status(common_1.HttpStatus.OK).json({
            message: "Get  total claims",
            daywise: response,
        });
    }
};
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "getall", null);
__decorate([
    common_1.Get("overallcount"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "account_receivables", null);
__decorate([
    common_1.Get("month/chargescollections"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "getcharges_collections", null);
__decorate([
    common_1.Get("month/freshclaims"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "get_insert", null);
__decorate([
    common_1.Get("avgnooftouches"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "getby_touch", null);
__decorate([
    common_1.Get("monthlycharges"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "get_monthlycharges", null);
__decorate([
    common_1.Get("daywise"),
    common_1.UseGuards(jwt_access_guard_1.default),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "get_daywise", null);
InventoryController = __decorate([
    common_1.Controller("inventory"),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
exports.InventoryController = InventoryController;
//# sourceMappingURL=inventory.controller.js.map