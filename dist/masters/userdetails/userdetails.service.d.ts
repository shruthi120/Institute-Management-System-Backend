import { Model } from 'mongoose';
import { UserDetailsDocument } from 'src/schemas/userdetails.schema';
export declare class UserdetailsService {
    private readonly userdetailsModal;
    constructor(userdetailsModal: Model<UserDetailsDocument>);
    create_userdetails(req_body: any): Promise<UserDetailsDocument>;
    get_all_userdetails(): Promise<UserDetailsDocument[]>;
    update_userdetails(id: any, body: any): Promise<UserDetailsDocument>;
    delete_userdetails(id: any): Promise<UserDetailsDocument>;
}
