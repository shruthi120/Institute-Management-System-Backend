import { Model } from "mongoose";
import { ClaimDocument } from "../schemas/claim.schema";
export declare class ClaimStatusService {
    private readonly claimModel;
    constructor(claimModel: Model<ClaimDocument>);
    get_category_value(): Promise<any[]>;
    get_subcategory_value(obj: any): Promise<any[]>;
    get_subcategory_claims(obj: any): Promise<ClaimDocument[]>;
}
