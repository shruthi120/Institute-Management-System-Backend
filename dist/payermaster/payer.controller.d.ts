import { PayerService } from './payer.service';
export declare class PayerController {
    private readonly payerService;
    constructor(payerService: PayerService);
    create_payercategory(req: any, res: any): Promise<any>;
    get_payercategory(res: any): Promise<any>;
    get_unique_payercategory(req: any, res: any): Promise<any>;
    update_payercategory(req: any, res: any): Promise<any>;
    delete_payercategory(req: any, res: any): Promise<any>;
    create_payermaster(req: any, res: any): Promise<any>;
    get_payermaster(res: any): Promise<any>;
    get_unique_payermaster(req: any, res: any): Promise<any>;
    update_payermaster(req: any, res: any): Promise<any>;
    delete_payermaster(req: any, res: any): Promise<any>;
}
