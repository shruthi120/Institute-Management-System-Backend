import { Document } from 'mongoose';
export declare type RoleDocument = Role & Document;
export declare class Role {
    role_name: string;
    status: string;
    createdAt: Date;
    management: boolean;
    transaction: boolean;
    data: boolean;
    ai_bot: boolean;
    performance: boolean;
    action: boolean;
    admin: boolean;
    configure: boolean;
    role: boolean;
    allocation: boolean;
}
export declare const RoleSchema: import("mongoose").Schema<Document<Role, any, any>, import("mongoose").Model<Document<Role, any, any>, any, any>, undefined, {}>;
