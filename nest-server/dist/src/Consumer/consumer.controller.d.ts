import { ConsumerService } from "./consumer.service";
import { PublicService } from "src/Public/public.service";
export declare class ConsumerController {
    private readonly consumerService;
    private readonly publicService;
    constructor(consumerService: ConsumerService, publicService: PublicService);
    getSelfInfo(userId: any): Promise<unknown>;
    displayWishList(consumer_id: number): Promise<(import(".prisma/client").Wishlist_product & {
        product: import(".prisma/client").Product;
    })[]>;
    uploadWishList(consumerId: number, productId: number): Promise<{
        success: boolean;
        data: void;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    deleteWishList(consumerId: number, productId: number): Promise<{
        success: boolean;
        data: import(".prisma/client").Prisma.BatchPayload;
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
