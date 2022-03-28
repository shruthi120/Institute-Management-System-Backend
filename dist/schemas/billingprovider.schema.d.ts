import { Document } from 'mongoose';
export declare type BillingProviderDocument = BillingProvider & Document;
export declare class BillingProvider {
    Display_name: string;
    Entity_type: string;
    Billing_lastname: string;
    Billing_firstname: string;
    Address1: string;
    Address2: string;
    City: string;
    Country: string;
    State: string;
    Zipcode: string;
    Email: string;
    Fax: string;
    Phone: string;
    Contactperson: string;
    FedTaxId: string;
    NPI: string;
    SSN: string;
    Send_to_EDI: boolean;
    Taxonomycode: string;
    default_billingprovider: string;
    Footer: string;
    Pay_to_provider: boolean;
    AR_statement_Address: boolean;
    Physician: string;
    Type: string;
    Service_Location: string;
    Payer_Category: string;
    Billing_Provider: string;
}
export declare const BillingProviderSchema: import("mongoose").Schema<Document<BillingProvider, any, any>, import("mongoose").Model<Document<BillingProvider, any, any>, any, any>, undefined, {}>;