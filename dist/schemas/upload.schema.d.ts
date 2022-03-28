import { Document } from 'mongoose';
export declare type UploadDocument = Upload & Document;
export declare class Upload {
    filename: string;
    inserted: string;
    notinserted: string;
    createdAt: Date;
}
export declare const UploadSchema: import("mongoose").Schema<Document<Upload, any, any>, import("mongoose").Model<Document<Upload, any, any>, any, any>, undefined, {}>;
