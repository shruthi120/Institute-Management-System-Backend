import { Model } from "mongoose";
import { ClaimDocument } from "src/schemas/claim.schema";
import { CptDocument } from "src/schemas/cpt.schema";
export declare class OutcomeService {
    private readonly ClaimModel;
    private readonly CptModel;
    constructor(ClaimModel: Model<ClaimDocument>, CptModel: Model<CptDocument>);
    getall(): Promise<any[][]>;
    account_receivables(): Promise<any[]>;
    percent_of_appealondenial(): Promise<string>;
    get_actionwise(): Promise<{
        denied: any[];
        paid: any[];
        nis: any[];
        acknowledgement: any[];
        pending: any[];
        finalized: any[];
        request: any[];
        searches: any[];
        error: any[];
    }>;
    get_payerclasswise(): Promise<{
        denied: any[];
        paid: any[];
        nis: any[];
    }>;
    get_cptwise(): Promise<{
        denied: any[];
        paid: any[];
        nis: any[];
    }>;
    get_agewise(): Promise<{
        denied: any[];
        paid: any[];
        nis: any[];
    }>;
    get_payerwise(): Promise<{
        denied: any[];
        paid: any[];
        nis: any[];
    }>;
    get_departmentwise(): Promise<any[]>;
    get_typewise(): Promise<any[][]>;
    get_topdenialreason(): Promise<any[]>;
}
