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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const role_schema_1 = require("../schemas/role.schema");
let RoleService = class RoleService {
    constructor(roleModal) {
        this.roleModal = roleModal;
    }
    async create_role(req_body) {
        const new_role = new this.roleModal(req_body);
        return new_role.save();
    }
    async get_all_role() {
        const role = await this.roleModal.find({});
        return role;
    }
    async update_role(id, body) {
        const role = await this.roleModal.findByIdAndUpdate(id, body, { new: true });
        return role;
    }
    async delete_role(id) {
        const role = await this.roleModal.findByIdAndDelete(id);
        ;
        return role;
    }
};
RoleService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Role')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map