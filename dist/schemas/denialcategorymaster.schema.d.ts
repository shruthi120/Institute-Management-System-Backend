import { Document } from "mongoose";
export declare type DenialcategorymasterDocument = Denialcategorymaster & Document;
export declare class Denialcategorymaster {
    statusCategoryCode: string;
    statusCode: string;
    Remarkcode: string;
    Category: string;
    SubCategory: string;
    claimStatus: string;
    RankCategory: string;
    Notes1: string;
    Notes2: string;
    Action1: string;
    Action2: string;
    reason: string;
    Comments: string;
    Bucket_to_be_moved: string;
    RemarkCodeOrDesc: string;
    claimCategory: string;
    claimSubCategory: string;
}
export declare const DenialcategorymasterSchema: import("mongoose").Schema<Document<Denialcategorymaster, any, any>, import("mongoose").Model<Document<Denialcategorymaster, any, any>, any, any>, undefined, {}>;
