import { ClaimService } from "./claim.service";
export declare class ClaimController {
    private readonly claimService;
    constructor(claimService: ClaimService);
    update_claimchange(req: any, res: any): Promise<any>;
    managepaymentUpdate(req: any, res: any): Promise<any>;
    get_by_claimId(req: any, res: any): Promise<any>;
    addcpt(req: any, res: any): Promise<any>;
    getall(req: any, res: any): Promise<any>;
    getextra(req: any, res: any): Promise<any>;
}
