import { Model } from 'mongoose';
import { ClaimDocument } from 'src/schemas/claim.schema';
export declare class UserclaimsService {
    private readonly claimModel;
    constructor(claimModel: Model<ClaimDocument>);
    getclaimperuser(userid: any): Promise<any[]>;
    getclaimdenied(userid: any): Promise<any[]>;
    getclaimprogress(userid: any): Promise<any[]>;
    getclaimcomplete(userid: any): Promise<any[]>;
    get_by_filter(id: any): Promise<any[][]>;
}
