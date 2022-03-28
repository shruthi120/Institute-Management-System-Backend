import { Model } from 'mongoose';
import { BillingProviderDocument } from 'src/schemas/billingprovider.schema';
export declare class BillingproviderService {
    private readonly billingproviderModal;
    constructor(billingproviderModal: Model<BillingProviderDocument>);
    create_billingprovider(req_body: any): Promise<BillingProviderDocument>;
    get_all_billingprovider(): Promise<BillingProviderDocument[]>;
    update_billingprovider(id: any, body: any): Promise<BillingProviderDocument>;
    delete_billingprovider(id: any): Promise<BillingProviderDocument>;
}
