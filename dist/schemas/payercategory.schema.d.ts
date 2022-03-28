import { Document } from 'mongoose';
export declare type PayercategoryDocument = Payercategory & Document;
export declare class Payercategory {
    category_id: string;
    category_name: string;
    description: string;
    billing_provider: string;
    insurance_adjustment: number;
    write_off: number;
    preauthorization: string;
    status: string;
}
export declare const PayercategorySchema: import("mongoose").Schema<Document<Payercategory, any, any>, import("mongoose").Model<Document<Payercategory, any, any>, any, any>, undefined, {}>;
