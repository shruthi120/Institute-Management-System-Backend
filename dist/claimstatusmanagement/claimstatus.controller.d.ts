import { ClaimStatusService } from "./claimstatus.service";
export declare class ClaimStatusController {
    private ClaimStatusService;
    constructor(ClaimStatusService: ClaimStatusService);
    group_helper(response: any, defaultdata: any): Promise<any>;
    claim_status_category(req: any, res: any): Promise<any>;
    subcategory_denial(req: any, res: any): Promise<any>;
    get_claimsubcategory_claims(req: any, res: any): Promise<any>;
}
