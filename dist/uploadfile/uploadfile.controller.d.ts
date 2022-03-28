import { UploadfileService } from "./uploadfile.service";
export declare class UploadfileController {
    private uploadfileService;
    constructor(uploadfileService: UploadfileService);
    insertBulk(res: any, file: any): Promise<any>;
    get_all_users(req: any, res: any): Promise<any>;
    delete(req: any, res: any): Promise<any>;
    get_files(req: any, res: any): Promise<any>;
}
