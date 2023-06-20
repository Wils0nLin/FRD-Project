import { ConsumerService } from "./consumer.service";
import { PublicService } from "src/Public/public.service";
export declare class ConsumerController {
    private readonly consumerService;
    private readonly publicService;
    constructor(consumerService: ConsumerService, publicService: PublicService);
    getSelfInfo(userId: any): Promise<unknown>;
    getQrCodeId(JWTpayload: any): void;
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
    displayOrder(JWTpayload: any): void;
    displayOrderHistory(JWTpayload: any): void;
    createOrder(itemId: any): void;
    paymentConfirm(paymentstatus: any): void;
    editConProfile(consumerId: any, form: any): Promise<import(".prisma/client").Consumer>;
    feedback(reaction: any): Promise<import(".prisma/client").Feedback>;
}
