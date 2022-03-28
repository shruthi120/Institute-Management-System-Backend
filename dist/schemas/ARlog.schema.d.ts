import { Document } from "mongoose";
export declare type ARlogDocument = ARlog & Document;
export declare class ARlog {
    User: string;
    Eventdate: Date;
    Status: string;
    ClaimID: string;
    Comments: string;
    Nextdate: Date;
    Module: string;
    Payertype: string;
}
export declare const ARlogSchema: import("mongoose").Schema<Document<ARlog, any, any>, import("mongoose").Model<Document<ARlog, any, any>, any, any>, undefined, {}>;
