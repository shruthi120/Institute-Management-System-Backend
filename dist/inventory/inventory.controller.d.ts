import { InventoryService } from "./inventory.service";
export declare class InventoryController {
    private inventoryService;
    constructor(inventoryService: InventoryService);
    group_helper(response: any, _id: any): Promise<any[]>;
    getall(req: any, res: any): Promise<any>;
    account_receivables(req: any, res: any): Promise<any>;
    getcharges_collections(req: any, res: any): Promise<any>;
    get_insert(req: any, res: any): Promise<any>;
    getby_touch(req: any, res: any): Promise<any>;
    get_monthlycharges(req: any, res: any): Promise<any>;
    get_daywise(req: any, res: any): Promise<any>;
}
