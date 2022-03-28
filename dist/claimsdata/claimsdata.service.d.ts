import { Model } from "mongoose";
import { ClaimDocument } from "src/schemas/claim.schema";
import { CptDocument } from "src/schemas/cpt.schema";
import { UploadfileService } from "src/uploadfile/uploadfile.service";
import { PayermasterDocument } from "src/schemas/payermaster.schema";
export declare class ClaimsdataService {
    private readonly ClaimModel;
    private readonly CptModel;
    private readonly PayermasterModel;
    private uploadfileService;
    constructor(ClaimModel: Model<ClaimDocument>, CptModel: Model<CptDocument>, PayermasterModel: Model<PayermasterDocument>, uploadfileService: UploadfileService);
    groupage(row: any): string;
    get_payercategory_and_tfl(payerid: any): Promise<(string | number)[]>;
    insertBulk(exceldata: any, name: any): Promise<any>;
    getclaimperuser(userid: any): Promise<any[]>;
    getallclaim(): Promise<ClaimDocument[]>;
}
