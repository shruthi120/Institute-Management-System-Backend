import { AdvancebillingproviderService } from './advancebillingprovider.service';
export declare class AdvancebillingproviderController {
    private advancebillingproviderService;
    constructor(advancebillingproviderService: AdvancebillingproviderService);
    create_advancedbillingprovider(req: any, res: any): Promise<any>;
    get_all_advancedbillingprovider(res: any): Promise<any>;
    update_advancedbillingprovider(req: any, res: any): Promise<any>;
    delete_advancedbillingprovider(req: any, res: any): Promise<any>;
}
