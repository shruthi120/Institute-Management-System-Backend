import { RoleService } from './role.service';
export declare class RoleController {
    private roleService;
    constructor(roleService: RoleService);
    create_role(req: any, res: any): Promise<any>;
    get_all_role(res: any): Promise<any>;
    update_role(req: any, res: any): Promise<any>;
    delete_role(req: any, res: any): Promise<any>;
}
