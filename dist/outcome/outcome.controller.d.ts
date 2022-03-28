import { OutcomeService } from "./outcome.service";
export declare class OutcomeController {
    private outcomeService;
    constructor(outcomeService: OutcomeService);
    group_helper(response: any, _id: any): Promise<any[]>;
    getall(req: any, res: any): Promise<any>;
    account_receivables(req: any, res: any): Promise<any>;
    percent_of_appealondenial(req: any, res: any): Promise<any>;
    get_actionwise(req: any, res: any): Promise<any>;
    get_payerclasswise(req: any, res: any): Promise<any>;
    get_agewise(req: any, res: any): Promise<any>;
    get_payerwise(req: any, res: any): Promise<any>;
    get_cptwise(req: any, res: any): Promise<any>;
    get_departmentwise(req: any, res: any): Promise<any>;
    get_typewise(req: any, res: any): Promise<any>;
    get_topdenialreason(req: any, res: any): Promise<any>;
}
