import { Model } from 'mongoose';
import { CptmasterDocument } from 'src/schemas/cptmaster.schema';
import { ModifierDocument } from 'src/schemas/modifier.schema';
export declare class CptmasterService {
    private readonly cptmasterModel;
    private readonly modifierModel;
    constructor(cptmasterModel: Model<CptmasterDocument>, modifierModel: Model<ModifierDocument>);
    create_cptmaster(req_body: any): Promise<CptmasterDocument>;
    get_cptmaster(): Promise<CptmasterDocument[]>;
    update_cptmaster(id: any, body: any): Promise<CptmasterDocument>;
    delete_cptmaster(id: any): Promise<CptmasterDocument>;
    get_by_cptmaster_code(query: any): Promise<ModifierDocument[]>;
    create_modifier(req_body: any): Promise<ModifierDocument>;
    get_modifier(): Promise<ModifierDocument[]>;
    update_modifier(id: any, body: any): Promise<ModifierDocument>;
    delete_modifier(id: any): Promise<ModifierDocument>;
    get_by_modifiercode(query: any): Promise<ModifierDocument[]>;
}
