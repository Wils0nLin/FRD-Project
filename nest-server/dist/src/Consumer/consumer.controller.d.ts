import { ConsumerService } from "./consumer.service";
import { PublicService } from "src/Public/public.service";
export declare class ConsumerController {
    private readonly consumerService;
    private readonly publicService;
    constructor(consumerService: ConsumerService, publicService: PublicService);
    getSelfInfo(userId: any): Promise<unknown>;
    getConsumerInfo(userId: any): Promise<unknown>;
    displayWishList(userId: any): Promise<unknown>;
    uploadWishList(form: any): Promise<{
        success: boolean;
        data: import(".prisma/client").Wishlist_product;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    deleteWishList(id: any): Promise<{
        success: boolean;
        data: unknown;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    getShopInfo(shopId: any): Promise<unknown>;
    displayOrder(JWTpayload: any): Promise<unknown>;
    deleteOrder(id: number): Promise<unknown>;
    displayOrderHistory(userId: any): Promise<unknown>;
    createOrder(form: any): Promise<boolean>;
    paymentConfirm(paymentArr: any): Promise<Promise<unknown>[]>;
    editUserProfile(userId: any, form: any): Promise<boolean>;
    editConProfile(conId: any, form: any): Promise<boolean>;
    editPassword(userId: any, form: any): Promise<boolean>;
    getHot(): Promise<unknown>;
    getAllProduct(): Promise<unknown>;
}
