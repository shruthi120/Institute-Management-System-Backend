import { Eligibilityservice } from "./eligibility.service";
export declare class EligibilityController {
    private eligibilityService;
    constructor(eligibilityService: Eligibilityservice);
    geteligibilityreport(req: any, res: any): Promise<any>;
}
