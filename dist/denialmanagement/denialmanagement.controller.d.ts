import { DenialmanagementService } from "./denialmanagement.service";
export declare class DenialmanagementController {
    private denialmanagementService;
    constructor(denialmanagementService: DenialmanagementService);
    group_helper(response: any, defaultdata: any): Promise<any>;
    group_helper1(subcategory: any, agegrp: any, response: any): Promise<any[]>;
    denied(req: any, res: any): Promise<any>;
    category_denial(req: any, res: any): Promise<any>;
    subcategory_denial(req: any, res: any): Promise<any>;
    getclaim(req: any, res: any): Promise<any>;
}
