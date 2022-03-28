import { Model } from 'mongoose';
import { CounterService } from 'src/counter/counter.service';
import { PayercategoryDocument } from 'src/schemas/payercategory.schema';
import { PayermasterDocument } from 'src/schemas/payermaster.schema';
export declare class PayerService {
    private readonly payercategoryModel;
    private readonly payermasterModel;
    private readonly counterService;
    constructor(payercategoryModel: Model<PayercategoryDocument>, payermasterModel: Model<PayermasterDocument>, counterService: CounterService);
    create_pcategory(req_body: any): Promise<PayercategoryDocument>;
    get_pcategory(): Promise<PayercategoryDocument[]>;
    update_pcategory(id: any, req_body: any): Promise<PayercategoryDocument>;
    delete_pcategory(id: any): Promise<PayercategoryDocument>;
    create_pmaster(req_body: any): Promise<PayermasterDocument>;
    get_pmaster(): Promise<PayermasterDocument[]>;
    update_pmaster(id: any, req_body: any): Promise<PayermasterDocument>;
    delete_pmaster(id: any): Promise<PayermasterDocument>;
}
