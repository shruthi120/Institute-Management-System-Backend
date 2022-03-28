import { UsersService } from "./users.service";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create_userfirst(req: any, res: any): Promise<any>;
    create_user(req: any, res: any): Promise<any>;
    get_all_users(req: any, res: any): Promise<any>;
    update_user(req: any, res: any): Promise<any>;
    delete_user(req: any, res: any): Promise<any>;
    get_users_by_name_and_role(req: any, res: any): Promise<any>;
}
