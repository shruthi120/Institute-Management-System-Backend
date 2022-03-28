import { Model } from 'mongoose';
import { AdvancedBillingProviderDocument } from 'src/schemas/advancedbillingprovider.schema';
export declare class AdvancebillingproviderService {
    private readonly advancedbillingproviderModal;
    constructor(advancedbillingproviderModal: Model<AdvancedBillingProviderDocument>);
    create_advancedbillingprovider(req_body: any): Promise<AdvancedBillingProviderDocument>;
    get_all_advancedbillingprovider(): Promise<AdvancedBillingProviderDocument[]>;
    update_advancedbillingprovider(id: any, body: any): Promise<AdvancedBillingProviderDocument>;
    delete_advancedbillingprovider(id: any): Promise<AdvancedBillingProviderDocument>;
}
