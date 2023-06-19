import { ConsumerService } from "./consumer.service";
import { PublicService } from "src/Public/public.service";
export declare class ConsumerController {
    private readonly consumerService;
    private readonly publicService;
    constructor(consumerService: ConsumerService, publicService: PublicService);
    getQrCodeId(JWTpayload: any): void;
    displayWishList(consumer_id: number): Promise<(import(".prisma/client").Wishlist_product & {
        product: import(".prisma/client").Product;
        version: import(".prisma/client").Version;
    })[]>;
    uploadWishList(formData: any): Promise<{
        success: boolean;
        data: import(".prisma/client").Wishlist_product;
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
    createOrder(param: any): void;
    prePaymentConfirm(paymentstatus: any): void;
    remainPaymentConfirm(paymentstatus: any): void;
    editConProfile(consumerId: any, form: any): Promise<import(".prisma/client").Consumer>;
    feedback(reaction: any): Promise<import(".prisma/client").Feedback>;
}
