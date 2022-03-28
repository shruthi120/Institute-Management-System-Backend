import { Model } from "mongoose";
import { ClaimDocument } from "../schemas/claim.schema";
export declare class ReportbuilderService {
    private readonly claimModel;
    constructor(claimModel: Model<ClaimDocument>);
    filter_claims(obj: any): Promise<any[]>;
}
