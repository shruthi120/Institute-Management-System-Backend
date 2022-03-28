import { Document } from 'mongoose';
export declare type EligibilityDocument = Eligibility & Document;
export declare class Eligibility {
    createdAt: Date;
}
export declare const EligibilitySchema: import("mongoose").Schema<Document<Eligibility, any, any>, import("mongoose").Model<Document<Eligibility, any, any>, any, any>, undefined, {}>;
