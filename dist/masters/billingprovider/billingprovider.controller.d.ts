import { BillingproviderService } from './billingprovider.service';
export declare class BillingproviderController {
    private billingproviderService;
    constructor(billingproviderService: BillingproviderService);
    create_billingprovider(req: any, res: any): Promise<any>;
    get_all_billingprovider(res: any): Promise<any>;
    update_billingprovider(req: any, res: any): Promise<any>;
    delete_billingprovider(req: any, res: any): Promise<any>;
}
