import { MerchantService } from "./merchant.service";
import { PublicService } from "src/Public/public.service";
export declare class MerchantController {
    private readonly merchantService;
    private readonly publicService;
    constructor(merchantService: MerchantService, publicService: PublicService);
    getSelfInfo(userId: any): Promise<unknown>;
    editMerProfile(merchantId: any, form: any): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        users_id: number;
        merchant_image: Buffer;
        merchant_name: string;
        merchant_phone: string;
        biz_registration: Buffer;
        district_id: number;
        address: string;
        bank_account: string;
        branch_id: number;
        opening_hour: string;
        announcement: string | null;
    }, unknown> & {}>;
    getAllItem(merId: any): Promise<unknown>;
    getComment(merId: any): Promise<unknown>;
    uploadItems(form: any): Promise<{
        success: boolean;
        data: import("@prisma/client/runtime").GetResult<{
            id: number;
            merchant_id: number;
            version_id: number;
            price: number;
            end_date: string;
            stock_status: string;
            availability: boolean;
        }, unknown> & {};
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
    getAllProducts(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        product_name: string;
        product_status: boolean;
        product_image: string;
        release_date: string;
        product_intro: string;
        view: number;
        platform_id: number;
    }, unknown> & {})[]>;
    getAllVersion(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        product_id: number;
        version: string;
        version_image: string;
    }, unknown> & {})[]>;
    getMerchantInfo(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        users_id: number;
        merchant_image: Buffer;
        merchant_name: string;
        merchant_phone: string;
        biz_registration: Buffer;
        district_id: number;
        address: string;
        bank_account: string;
        branch_id: number;
        opening_hour: string;
        announcement: string | null;
    }, unknown> & {})[]>;
}
