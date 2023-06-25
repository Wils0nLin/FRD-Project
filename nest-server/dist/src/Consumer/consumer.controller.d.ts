import { ConsumerService } from "./consumer.service";
import { PublicService } from "src/Public/public.service";
export declare class ConsumerController {
    private readonly consumerService;
    private readonly publicService;
    constructor(consumerService: ConsumerService, publicService: PublicService);
    getSelfInfo(userId: any): Promise<unknown>;
    uploadWishList(formData: any): Promise<{
        success: boolean;
        data: void;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    deleteWishList(requestData: any): Promise<{
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
    displayOrderHistory(JWTpayload: any): void;
    createOrder(form: any): Promise<boolean>;
    paymentConfirm(paymentIntent: any): void;
    editUserProfile(userId: any, form: any): Promise<boolean>;
    editConProfile(conId: any, form: any): Promise<boolean>;
    editPassword(userId: any, form: any): Promise<boolean>;
}
