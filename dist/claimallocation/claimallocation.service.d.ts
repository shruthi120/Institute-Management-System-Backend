import { Model } from "mongoose";
import { ClaimDocument } from "../schemas/claim.schema";
export declare class ClaimallocationService {
    private readonly claimModel;
    constructor(claimModel: Model<ClaimDocument>);
    filter_claims(obj: any): Promise<ClaimDocument[]>;
    allocate_claims(ids: any, req: any): Promise<import("mongoose").UpdateWriteOpResult>;
    unallocatedclaims(): Promise<ClaimDocument[]>;
    allocated(): Promise<ClaimDocument[]>;
    multipleuser_allocate_claims(claimids: any, obj: any): Promise<void>;
    advanced_search_filter_data(obj: any): Promise<ClaimDocument[]>;
}
