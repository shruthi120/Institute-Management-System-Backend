import { Model } from "mongoose";
import { UploadDocument } from "src/schemas/upload.schema";
import { CounterDocument } from "src/schemas/counter.schema";
import { ClaimDocument } from "src/schemas/claim.schema";
import { CptDocument } from "src/schemas/cpt.schema";
import { PayermasterDocument } from "src/schemas/payermaster.schema";
import { CounterService } from "src/counter/counter.service";
import { DenialcategorymasterDocument } from "src/schemas/denialcategorymaster.schema";
export declare class UploadfileService {
    private readonly uploadModel;
    private readonly DenialCategorymasterModel;
    private readonly ClaimModel;
    private readonly CptModel;
    private readonly PayermasterModel;
    private readonly CounterModel;
    private readonly counterService;
    constructor(uploadModel: Model<UploadDocument>, DenialCategorymasterModel: Model<DenialcategorymasterDocument>, ClaimModel: Model<ClaimDocument>, CptModel: Model<CptDocument>, PayermasterModel: Model<PayermasterDocument>, CounterModel: Model<CounterDocument>, counterService: CounterService);
    groupage(row: any): string;
    get_payercategory_and_tfl(payerid: any): Promise<(string | Number)[]>;
    chnagehealthcareapi(exceldata: any, name: any): Promise<any>;
    get_token(): Promise<any>;
    get_status(body: any, claimnumber: any, location: any, row: any): Promise<void>;
    insertBulkchangehealthcaredata(data: any, claimnumber: any, row: any): Promise<any>;
    insertBulk(row: any, name: any): Promise<any>;
    create_uploadfiledata(req_body: any): Promise<void>;
    get_all_uploads(): Promise<UploadDocument[]>;
    delete_file(id: any): Promise<UploadDocument>;
    get_files_by_date(val1: any, val2: any): Promise<UploadDocument[]>;
}
