import { Model } from "mongoose";
import { ClaimDocument } from "src/schemas/claim.schema";
import { CptDocument } from "src/schemas/cpt.schema";
import { UploadDocument } from "src/schemas/upload.schema";
export declare class InventoryService {
    private readonly ClaimModel;
    private readonly CptModel;
    private readonly UploadModel;
    constructor(ClaimModel: Model<ClaimDocument>, CptModel: Model<CptDocument>, UploadModel: Model<UploadDocument>);
    getall(): Promise<any[][]>;
    overallcount(): Promise<any[][]>;
    getcharges_collections(): Promise<any[]>;
    get_claim_insertdata(year: any): Promise<any[]>;
    getby_touch(): Promise<any[]>;
    get_monthlycharges(): Promise<any[]>;
    get_daywise(): Promise<any[]>;
}
