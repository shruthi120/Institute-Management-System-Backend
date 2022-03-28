import { TrendService } from "./trends.service";
export declare class TrendController {
    private readonly trendService;
    constructor(trendService: TrendService);
    get_by_cpts(req: any, res: any): Promise<any>;
    get_by_payer(req: any, res: any): Promise<any>;
    get_by_toppatient(req: any, res: any): Promise<any>;
}
