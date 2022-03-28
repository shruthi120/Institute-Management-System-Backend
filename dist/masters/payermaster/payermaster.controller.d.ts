import { PayermasterService } from "./payermaster.service";
export declare class PayermasterController {
    private readonly payermasterService;
    constructor(payermasterService: PayermasterService);
    create_payermaster(req: any, res: any): Promise<any>;
    get_payermaster(res: any): Promise<any>;
    update_payermaster(req: any, res: any): Promise<any>;
    delete_payermaster(req: any, res: any): Promise<any>;
    insertBulk(res: any, file: any): Promise<any>;
    advancedpayermastersearch(req: any, res: any): Promise<any>;
}
