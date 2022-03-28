import { Model } from "mongoose";
import { PayercategoryDocument } from "src/schemas/payercategory.schema";
export declare class PayercategoryService {
    private readonly payercategoryModel;
    constructor(payercategoryModel: Model<PayercategoryDocument>);
    create_payercategory(req_body: any): Promise<PayercategoryDocument>;
    get_payercategory(): Promise<PayercategoryDocument[]>;
    update_payercategory(id: any, req_body: any): Promise<PayercategoryDocument>;
    delete_payercategory(id: any): Promise<PayercategoryDocument>;
    insert_categoryBulk(exceldata: any, name: any): Promise<any>;
    getpayercategoryname(Category_Name: any): Promise<PayercategoryDocument[]>;
}
