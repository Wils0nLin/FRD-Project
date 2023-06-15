import { AdminService } from 'src/Admin/admin.service';
import { PublicService } from 'src/Public/public.service';
export declare class AdminController {
    private readonly adminService;
    private readonly publicService;
    constructor(adminService: AdminService, publicService: PublicService);
    upLoadProduct(form: any): void;
    merchantReg(): void;
    merchantConfirm(Param: any): void;
}
