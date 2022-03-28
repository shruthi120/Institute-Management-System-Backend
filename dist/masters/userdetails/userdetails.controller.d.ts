import { UserdetailsService } from './userdetails.service';
export declare class UserdetailsController {
    private userdetailsService;
    constructor(userdetailsService: UserdetailsService);
    create_userdetails(req: any, res: any): Promise<any>;
    get_all_userdetails(res: any): Promise<any>;
    update_userdetails(req: any, res: any): Promise<any>;
    delete_userdetails(req: any, res: any): Promise<any>;
}
