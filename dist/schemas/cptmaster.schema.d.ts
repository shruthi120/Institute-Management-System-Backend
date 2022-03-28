import { Document } from 'mongoose';
export declare type CptmasterDocument = Cptmaster & Document;
export declare class Cptmaster {
    cpt_code: string;
    unit: Number;
    price: Number;
    expected_amt: Number;
    revenue_code: string;
    description: string;
    lab_code: string;
    status: string;
    modifier1: string;
    modifier2: string;
    modifier3: string;
    modifier4: string;
    drug: boolean;
    desc_in_sv101: boolean;
    rlsd: boolean;
    supervising_provider: string;
    not_bill_to_insurance: boolean;
    insurance_category: object;
    age_from: Number;
    age_to: Number;
    gender: string;
    frequency: string;
    effective_date: Date;
    expiry_date: Date;
}
export declare const CptmasterSchema: import("mongoose").Schema<Document<Cptmaster, any, any>, import("mongoose").Model<Document<Cptmaster, any, any>, any, any>, undefined, {}>;
