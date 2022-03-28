import { ClaimallocationService } from "./claimallocation.service";
export declare class ClaimallocationController {
    private claimallocationService;
    constructor(claimallocationService: ClaimallocationService);
    allocate(req: any, res: any): Promise<any>;
    claimallocation(req: any, res: any): Promise<any>;
    unallocate(req: any, res: any): Promise<any>;
    alreadyallocated(req: any, res: any): Promise<any>;
    multiclaimallocation(req: any, res: any): Promise<any>;
    advanced_search_filter_data(req: any, res: any): Promise<any>;
}
