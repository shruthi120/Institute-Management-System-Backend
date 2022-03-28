import { Model } from "mongoose";
import { PayermasterDocument } from "src/schemas/payermaster.schema";
export declare class PayermasterService {
    private readonly payermasterModel;
    constructor(payermasterModel: Model<PayermasterDocument>);
    create_payermaster(req_body: any): Promise<PayermasterDocument>;
    get_payermaster(): Promise<PayermasterDocument[]>;
    update_payermaster(id: any, req_body: any): Promise<PayermasterDocument>;
    delete_payermaster(id: any): Promise<PayermasterDocument>;
    insertBulk(exceldata: any, name: any): Promise<any>;
    advancedpayermastersearch(obj: any): Promise<PayermasterDocument[]>;
}
