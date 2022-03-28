import { Model } from 'mongoose';
import { CounterDocument } from 'src/schemas/counter.schema';
export declare class CounterService {
    private readonly counterModel;
    constructor(counterModel: Model<CounterDocument>);
    create_counter(req_body: any): Promise<CounterDocument>;
    get_counter(counter_name: any): Promise<CounterDocument>;
    get_all_counters(): Promise<CounterDocument[]>;
    update_counter(req: any): Promise<CounterDocument>;
    delete_counter(counter_name: any): Promise<CounterDocument>;
    get_next_sequence_value(counter_name: any): Promise<number>;
}
