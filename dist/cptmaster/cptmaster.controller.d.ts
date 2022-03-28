import { CptmasterService } from './cptmaster.service';
export declare class CptmasterController {
    private readonly cptmasterService;
    constructor(cptmasterService: CptmasterService);
    create_cptmaster(req: any, res: any): Promise<any>;
    get_cptmaster(res: any): Promise<any>;
    update_cptmaster(req: any, res: any): Promise<any>;
    delete_cptmaster(req: any, res: any): Promise<any>;
    get_unique_cptmaster(req: any, res: any): Promise<any>;
    create_modifier(req: any, res: any): Promise<any>;
    get_modifier(res: any): Promise<any>;
    update_modifier(req: any, res: any): Promise<any>;
    delete_modifier(req: any, res: any): Promise<any>;
    get_unique_modifier(req: any, res: any): Promise<any>;
}
