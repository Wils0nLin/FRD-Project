import { Wishlist_product } from "@prisma/client";
import { Prisma } from "@prisma/client";
export declare class ConsumerService {
    getQrCodeId(userId: string): void;
    displayWishList(consumer_id: number): Promise<(Wishlist_product & {
        version: import(".prisma/client").Version;
        product: import(".prisma/client").Product;
    })[]>;
    uploadWishList(consumerId: number, productId: number, versionId: number, targetPrice: number, notification: boolean): Promise<Wishlist_product>;
    deleteWishList(consumerId: number, productId: number, versionId: number): Promise<Prisma.BatchPayload>;
    createOrder(itemID: string): void;
    paymentConfirm(paymentStatus: any): void;
    editConProfile(consumerId: any, form: any): Promise<import(".prisma/client").Consumer>;
    feedback(comment: any, merchantId: any, consumerId: any, rating: number): Promise<import(".prisma/client").Feedback>;
}
