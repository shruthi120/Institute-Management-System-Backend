import { Document } from 'mongoose';
export declare type ModifierDocument = Modifier & Document;
export declare class Modifier {
    code: string;
    description: string;
    status: string;
}
export declare const ModifierSchema: import("mongoose").Schema<Document<Modifier, any, any>, import("mongoose").Model<Document<Modifier, any, any>, any, any>, undefined, {}>;
