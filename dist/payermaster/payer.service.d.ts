import { Model } from 'mongoose';
import { PayercategoryDocument } from 'src/schemas/payercategory.schema';
import { PayermasterDocument } from 'src/schemas/payermaster.schema';
export declare class PayerService {
    private readonly payercategoryModel;
    private readonly payermasterModel;
    constructor(payercategoryModel: Model<PayercategoryDocument>, payermasterModel: Model<PayermasterDocument>);
    create_payercategory(req_body: any): Promise<PayercategoryDocument>;
    get_payercategory(): Promise<PayercategoryDocument[]>;
    get_by_payercategory(query: any): Promise<PayercategoryDocument[]>;
    update_payercategory(id: any, req_body: any): Promise<PayercategoryDocument>;
    delete_payercategory(id: any): Promise<PayercategoryDocument>;
    create_payermaster(req_body: any): Promise<PayermasterDocument>;
    get_payermaster(): Promise<PayermasterDocument[]>;
    get_by_payermaster(query: any): Promise<PayermasterDocument[]>;
    update_payermaster(id: any, req_body: any): Promise<PayermasterDocument>;
    delete_payermaster(id: any): Promise<PayermasterDocument>;
}
