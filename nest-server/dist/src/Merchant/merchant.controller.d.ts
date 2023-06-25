import { MerchantService } from "./merchant.service";
import { PublicService } from "src/Public/public.service";
export declare class MerchantController {
    private readonly merchantService;
    private readonly publicService;
    constructor(merchantService: MerchantService, publicService: PublicService);
    getSelfInfo(userId: any): Promise<unknown>;
    editMerProfile(merchantId: any, form: any): Promise<import(".prisma/client").Merchant>;
    getAllItem(merId: any): Promise<unknown>;
    getComment(merId: any): Promise<unknown>;
    uploadItems(form: any): Promise<{
        success: boolean;
        data: import(".prisma/client").Item;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    updateItems(itemId: any, form: any): Promise<boolean>;
    deleteItems(itemId: any): Promise<boolean>;
    getPreOrderItem(merId: any): Promise<unknown>;
    getPreOrderRecord(itemId: any): Promise<unknown>;
    getOrderRecord(merId: any): Promise<unknown>;
    getTradeInfo(form: any): Promise<unknown>;
    getOrderInfo(form: any): Promise<unknown>;
    updateOrder(orderId: any): Promise<boolean>;
    getAllProducts(): Promise<import(".prisma/client").Product[]>;
    getAllVersion(): Promise<import(".prisma/client").Version[]>;
    getMerchantInfo(): Promise<import(".prisma/client").Merchant[]>;
}
