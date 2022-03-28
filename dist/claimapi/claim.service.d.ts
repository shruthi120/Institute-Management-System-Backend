import { Model } from "mongoose";
import { ClaimDocument } from "src/schemas/claim.schema";
import { ARlogDocument } from "src/schemas/ARlog.schema";
import { CptDocument } from "src/schemas/cpt.schema";
export declare class ClaimService {
    private readonly claimModel;
    private readonly arlogModel;
    private readonly CptModel;
    constructor(claimModel: Model<ClaimDocument>, arlogModel: Model<ARlogDocument>, CptModel: Model<CptDocument>);
    managepaymentUpdate(claimid: any, body: any, cptcode: any): Promise<void>;
    update_claimchange(id: any, body: any): Promise<void>;
    get_by_claimId(claimid: any): Promise<any[]>;
    addcpt(body: any): Promise<CptDocument[]>;
    getallclaim(): Promise<ClaimDocument[]>;
    getextradetails(): Promise<any[][]>;
}
