import { Model } from 'mongoose';
import { ClaimDocument } from 'src/schemas/claim.schema';
export declare class TrendService {
    private readonly claimModel;
    constructor(claimModel: Model<ClaimDocument>);
    get_by_topcpt(): Promise<any[]>;
    get_by_toppayer(): Promise<any[]>;
    get_by_toppatient(): Promise<any[]>;
}
