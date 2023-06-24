import { Wishlist_product } from "@prisma/client";
import { Prisma } from "@prisma/client";
export declare class ConsumerService {
    getSelfInfo(userId: any): Promise<unknown>;
    test(): Promise<unknown>;
    displayWishList(consumer_id: number): Promise<(Wishlist_product & {
        product: import(".prisma/client").Product;
    })[]>;
    uploadWishList(consumerId: number, productId: number): Promise<void>;
    deleteWishList(consumerId: number, productId: number): Promise<Prisma.BatchPayload>;
    getShopInfo(shopId: any): Promise<unknown>;
    createOrder(form: any): Promise<unknown>;
    paymentConfirm(paymentStatus: any): void;
    editUserProfile(userId: any, form: any): Promise<boolean>;
    editConProfile(conId: any, form: any): Promise<boolean>;
    editPassword(userId: any, form: any): Promise<boolean>;
    getHot(): Promise<unknown>;
}
