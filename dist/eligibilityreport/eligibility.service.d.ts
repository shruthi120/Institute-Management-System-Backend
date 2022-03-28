import { Model } from "mongoose";
import { EligibilityDocument } from "src/schemas/eligibility.schema";
import { PayermasterDocument } from "src/schemas/payermaster.schema";
import { ClaimDocument } from "src/schemas/claim.schema";
export declare class Eligibilityservice {
    private readonly eligibilityModel;
    private readonly PayermasterModel;
    private readonly ClaimModel;
    constructor(eligibilityModel: Model<EligibilityDocument>, PayermasterModel: Model<PayermasterDocument>, ClaimModel: Model<ClaimDocument>);
    eligibilityreport(body: any): Promise<void>;
    get_token(): Promise<any>;
    get_status(data: any): Promise<void>;
}
