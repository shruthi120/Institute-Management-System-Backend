import { ClaimsdataService } from "./claimsdata.service";
export declare class ClaimsdataController {
    private claimsdataService;
    constructor(claimsdataService: ClaimsdataService);
    insertBulk(res: any, file: any): Promise<any>;
    getuserdata(req: any, res: any): Promise<any>;
    getall(req: any, res: any): Promise<any>;
}
