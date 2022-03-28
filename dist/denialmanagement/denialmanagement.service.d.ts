import { Model } from "mongoose";
import { ClaimDocument } from "../schemas/claim.schema";
export declare class DenialmanagementService {
    private readonly claimModel;
    constructor(claimModel: Model<ClaimDocument>);
    get_overall_value(): Promise<any[][]>;
    get_category_value(obj: any): Promise<any[]>;
    get_subcategory_value(obj: any): Promise<any[]>;
    get_denialclaim(obj: any): Promise<ClaimDocument[]>;
}
