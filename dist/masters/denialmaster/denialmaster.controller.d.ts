import { DenialmasterService } from './denialmaster.service';
export declare class DenialmasterController {
    private denialmasterService;
    constructor(denialmasterService: DenialmasterService);
    create_denialmaster(req: any, res: any): Promise<any>;
    get_all_denialmaster(res: any): Promise<any>;
    update_denialmaster(req: any, res: any): Promise<any>;
    delete_denialmaster(req: any, res: any): Promise<any>;
    insertBulk(res: any, file: any): Promise<any>;
}
