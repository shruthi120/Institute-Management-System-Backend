import { Model } from "mongoose";
import { CptmasterDocument } from "src/schemas/cptmaster.schema";
export declare class CptmasterService {
    private readonly cptmasterModel;
    constructor(cptmasterModel: Model<CptmasterDocument>);
    create_cptmaster(req_body: any): Promise<CptmasterDocument>;
    get_cptmaster(): Promise<CptmasterDocument[]>;
    update_cptmaster(id: any, body: any): Promise<CptmasterDocument>;
    delete_cptmaster(id: any): Promise<CptmasterDocument>;
    insertBulk(exceldata: any, name: any): Promise<any>;
    advancedcptmastersearch(obj: any): Promise<CptmasterDocument[]>;
}
