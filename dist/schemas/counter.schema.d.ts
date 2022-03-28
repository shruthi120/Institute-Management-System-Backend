import { Document } from 'mongoose';
export declare type CounterDocument = Counter & Document;
export declare class Counter {
    _id: string;
    sequence_value: number;
}
export declare const CounterSchema: import("mongoose").Schema<Document<Counter, any, any>, import("mongoose").Model<Document<Counter, any, any>, any, any>, undefined, {}>;
