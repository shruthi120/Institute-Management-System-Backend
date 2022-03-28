import { Model } from "mongoose";
import { UserDocument } from "../schemas/user.schema";
import { CounterService } from "src/counter/counter.service";
export declare class UsersService {
    private readonly userModel;
    private counterService;
    constructor(userModel: Model<UserDocument>, counterService: CounterService);
    private hashPassword;
    create_userfirst(req_body: any): Promise<string>;
    create_user(req_body: any): Promise<string>;
    get_all_users(): Promise<UserDocument[]>;
    update_user(id: any, req_body: any): Promise<UserDocument>;
    delete_user(id: any): Promise<UserDocument>;
    get_firstname_and_role(obj: any): Promise<UserDocument[]>;
}
