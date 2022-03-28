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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const Handlebars = require('handlebars');
var crypto = require('crypto');
const obocreateusermail_1 = require("../views/obocreateusermail");
const sendMail_1 = require("../utils/sendMail");
const counter_service_1 = require("../counter/counter.service");
let UsersService = class UsersService {
    constructor(userModel, counterService) {
        this.userModel = userModel;
        this.counterService = counterService;
    }
    async hashPassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
    async create_userfirst(req_body) {
        const user = await this.userModel.findOne({
            email: req_body.email,
            phone_number: req_body.phone_number,
        });
        if (user) {
            throw new common_1.UnauthorizedException('User already exists!');
        }
        const new_user = new this.userModel();
        new_user._id = await this.counterService.get_next_sequence_value('user_id');
        new_user.first_name = req_body.first_name;
        new_user.last_name = req_body.last_name;
        new_user.role = req_body.role;
        new_user.email = req_body.email;
        new_user.country_code = req_body.country_code;
        new_user.phone_number = req_body.phone_number;
        new_user.salt = await bcrypt.genSalt();
        new_user.password = await this.hashPassword(req_body.password, new_user.salt);
        await new_user.save();
        return 'User created successfully !';
    }
    async create_user(req_body) {
        const user = await this.userModel.findOne({
            email: req_body.email,
            phone_number: req_body.phone_number,
        });
        if (user) {
            throw new common_1.UnauthorizedException('User already exists!');
        }
        const new_user = new this.userModel();
        new_user._id = await this.counterService.get_next_sequence_value('user_id');
        new_user.first_name = req_body.first_name;
        new_user.last_name = req_body.last_name;
        new_user.role = req_body.role;
        new_user.email = req_body.email;
        new_user.country_code = req_body.country_code;
        new_user.phone_number = req_body.phone_number;
        new_user.salt = await bcrypt.genSalt();
        var password = crypto.randomBytes(5).toString('hex');
        new_user.password = await this.hashPassword(password, new_user.salt);
        await new_user.save();
        const template = Handlebars.compile(obocreateusermail_1.obocreateusermail);
        const data = {
            email: req_body.email,
            password: password,
        };
        const htmlBody = template(data);
        try {
            const result = await sendMail_1.sendMail(req_body.email, 'Welcome mail', 'Login Credentials for OBO', htmlBody);
            console.log("iam result", result);
        }
        catch (err) {
            console.log("iam err", err);
        }
        return 'User created and Credentials sent through mail!';
    }
    async get_all_users() {
        const users = await this.userModel.find();
        return users;
    }
    async update_user(id, req_body) {
        const user = await this.userModel.findByIdAndUpdate(id, req_body, {
            new: true,
        });
        return user;
    }
    async delete_user(id) {
        const user = await this.userModel.findByIdAndDelete(id);
        return user;
    }
    async get_createddate_and_role(obj) {
        let from = new Date(obj.date);
        let to = new Date(obj.date);
        to.setDate(from.getDate() + 1);
        let values = [];
        for (let x in obj) {
            values.push(obj[x]);
        }
        values.shift();
        console.log("chj", values);
        const user = await this.userModel.find({
            $and: [{ createdAt: { $lte: to } }, { createdAt: { $gte: from } }, { role: { $in: values } }],
        });
        console.log("iam user", user);
        return user;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        counter_service_1.CounterService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map