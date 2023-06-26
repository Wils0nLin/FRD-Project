import { Prisma } from "@prisma/client";
export declare class ConsumerService {
    getSelfInfo(userId: any): Promise<unknown>;
    displayWishList(consumer_id: number): Promise<
        (Wishlist_product & {
            product: import(".prisma/client").Product;
        })[]
    >;
    deleteOrder(id: number): Promise<unknown>;
    getOrderRecord(userId: any): Promise<unknown>;
    displayOrder(JWTpayload: any): Promise<unknown>;
    uploadWishList(form: any): Promise<Wishlist_product>;
    displayWishList(userId: any): Promise<unknown>;
    deleteWishList(id: any): Promise<unknown>;
    getShopInfo(shopId: any): Promise<unknown>;
    createOrder(form: any): Promise<boolean>;
    paymentConfirm(paymentArr: Array<number>): Promise<Promise<unknown>[]>;
    editUserProfile(userId: any, form: any): Promise<boolean>;
    editConProfile(conId: any, form: any): Promise<boolean>;
    editPassword(userId: any, form: any): Promise<boolean>;
    getHot(): Promise<unknown>;
    getAllProduct(): Promise<unknown>;
}
