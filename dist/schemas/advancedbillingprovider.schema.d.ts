import { Document } from 'mongoose';
export declare type AdvancedBillingProviderDocument = AdvancedBillingProvider & Document;
export declare class AdvancedBillingProvider {
    Physician: string;
    Type: string;
    Service_Location: string;
    Payer_Category: string;
    Billing_Provider: string;
}
export declare const AdvancedBillingProviderSchema: import("mongoose").Schema<Document<AdvancedBillingProvider, any, any>, import("mongoose").Model<Document<AdvancedBillingProvider, any, any>, any, any>, undefined, {}>;
