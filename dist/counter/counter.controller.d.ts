import { CounterService } from './counter.service';
export declare class CounterController {
    private counterService;
    constructor(counterService: CounterService);
    create_counter(req: any, res: any): Promise<any>;
    get_all_counter(res: any): Promise<any>;
    get_counter(req: any, res: any): Promise<any>;
    update_counter(req: any, res: any): Promise<any>;
    delete_counter(req: any, res: any): Promise<any>;
}
