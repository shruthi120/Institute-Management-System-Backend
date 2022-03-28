import { Model } from 'mongoose';
import { RoleDocument } from 'src/schemas/role.schema';
export declare class RoleService {
    private readonly roleModal;
    constructor(roleModal: Model<RoleDocument>);
    create_role(req_body: any): Promise<RoleDocument>;
    get_all_role(): Promise<RoleDocument[]>;
    update_role(id: any, body: any): Promise<RoleDocument>;
    delete_role(id: any): Promise<RoleDocument>;
}
