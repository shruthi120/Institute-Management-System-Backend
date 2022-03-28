import { Model } from 'mongoose';
import { ModifierDocument } from 'src/schemas/modifier.schema';
export declare class ModifiersService {
    private readonly modifierModel;
    constructor(modifierModel: Model<ModifierDocument>);
    create_modifier(req_body: any): Promise<ModifierDocument>;
    get_modifier(): Promise<ModifierDocument[]>;
    update_modifier(id: any, body: any): Promise<ModifierDocument>;
    delete_modifier(id: any): Promise<ModifierDocument>;
}
