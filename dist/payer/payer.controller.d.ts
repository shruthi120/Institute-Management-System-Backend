import { PayerService } from './payer.service';
export declare class PayerController {
    private readonly payerService;
    constructor(payerService: PayerService);
    create_pcategory(req: any, res: any): Promise<any>;
    get_pcategory(res: any): Promise<any>;
    update_pcategory(req: any, res: any): Promise<any>;
    delete_pcategory(req: any, res: any): Promise<any>;
    create_pmaster(req: any, res: any): Promise<any>;
    get_pmaster(res: any): Promise<any>;
    update_pmaster(req: any, res: any): Promise<any>;
    delete_pmaster(req: any, res: any): Promise<any>;
}
