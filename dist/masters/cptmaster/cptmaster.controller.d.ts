import { CptmasterService } from "./cptmaster.service";
export declare class CptmasterController {
    private readonly cptmasterService;
    constructor(cptmasterService: CptmasterService);
    create_cptmaster(req: any, res: any): Promise<any>;
    get_cptmaster(res: any): Promise<any>;
    update_cptmaster(req: any, res: any): Promise<any>;
    delete_cptmaster(req: any, res: any): Promise<any>;
    insertBulk(res: any, file: any): Promise<any>;
    advancedcptmastersearch(req: any, res: any): Promise<any>;
}
