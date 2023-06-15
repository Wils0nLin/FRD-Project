import { MerchantService } from './merchant.service';
import { PublicService } from 'src/Public/public.service';
export declare class MerchantController {
    private readonly merchantService;
    private readonly publicService;
    constructor(merchantService: MerchantService, publicService: PublicService);
    editProfile(form: any): void;
    upLoadItems(form: any): void;
    updateItems(form: any): void;
    changeItemStatus(form: any): void;
    pairUserId(parms: any): void;
    paymentConfirm(resultStatus: any): void;
}
