import { ReportbuilderService } from "./reportbuilder.service";
export declare class ReportbuilderController {
    private reportbuilderService;
    constructor(reportbuilderService: ReportbuilderService);
    getdata(req: any, res: any): Promise<any>;
}
