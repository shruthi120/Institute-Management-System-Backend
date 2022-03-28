import { Model } from 'mongoose';
import { DenialcategorymasterDocument } from 'src/schemas/denialcategorymaster.schema';
export declare class DenialmasterService {
    private readonly denialcategorymasterModal;
    constructor(denialcategorymasterModal: Model<DenialcategorymasterDocument>);
    create_denialmaster(req_body: any): Promise<DenialcategorymasterDocument>;
    get_all_denialmaster(): Promise<DenialcategorymasterDocument[]>;
    update_denialmaster(id: any, body: any): Promise<DenialcategorymasterDocument>;
    delete_denialmaster(id: any): Promise<DenialcategorymasterDocument>;
    insertBulk(exceldata: any, name: any): Promise<any>;
}
