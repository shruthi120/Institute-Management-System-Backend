import { UserclaimsService } from "./userclaims.service";
export declare class UserclaimsController {
    private readonly userclaimsService;
    constructor(userclaimsService: UserclaimsService);
    getuserdata(req: any, res: any): Promise<any>;
    getuserdenial(req: any, res: any): Promise<any>;
    getuserinprogress(req: any, res: any): Promise<any>;
    getusercompleted(req: any, res: any): Promise<any>;
    get_by_toaction(req: any, res: any): Promise<any>;
}
