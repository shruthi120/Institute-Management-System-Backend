import { PayercategoryService } from "./payercategory.service";
export declare class PayercategoryController {
    private readonly payercategoryService;
    constructor(payercategoryService: PayercategoryService);
    create_payercategory(req: any, res: any): Promise<any>;
    get_payercategory(res: any): Promise<any>;
    update_payercategory(req: any, res: any): Promise<any>;
    delete_payercategory(req: any, res: any): Promise<any>;
    insert_categoryBulk(res: any, file: any): Promise<any>;
    getpayercategoryname(req: any, res: any): Promise<any>;
}
