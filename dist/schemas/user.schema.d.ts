import { Document } from "mongoose";
export declare type UserDocument = User & Document;
export declare class User {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    country_code: string;
    phone_number: string;
    role: string;
    password: string;
    createdAt: Date;
    salt: string;
    resetPasswordStatus: boolean;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<Document<User, any, any>, any, any>, undefined, {}>;
