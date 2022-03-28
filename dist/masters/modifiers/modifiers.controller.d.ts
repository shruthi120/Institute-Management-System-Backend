import { ModifiersService } from './modifiers.service';
export declare class ModifiersController {
    private readonly modifiersService;
    constructor(modifiersService: ModifiersService);
    create_modifier(req: any, res: any): Promise<any>;
    get_modifier(res: any): Promise<any>;
    update_modifier(req: any, res: any): Promise<any>;
    delete_modifier(req: any, res: any): Promise<any>;
}
