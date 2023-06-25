import { Prisma } from "@prisma/client";
export declare class ConsumerService {
    getSelfInfo(userId: any): Promise<unknown>;
    displayWishList(consumer_id: number): Promise<({
        product: import("@prisma/client/runtime").GetResult<{
            id: number;
            product_name: string;
            product_status: boolean;
            product_image: string;
            release_date: string;
            product_intro: string;
            view: number;
            platform_id: number;
        }, unknown> & {};
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        consumer_id: number;
        product_id: number;
    }, unknown> & {})[]>;
    deleteOrder(id: number): Promise<unknown>;
    getOrderRecord(userId: any): Promise<unknown>;
    displayOrder(JWTpayload: any): Promise<unknown>;
    uploadWishList(consumerId: number, productId: number): Promise<void>;
    deleteWishList(consumerId: number, productId: number): Promise<Prisma.BatchPayload>;
    getShopInfo(shopId: any): Promise<unknown>;
    createOrder(form: any): Promise<boolean>;
    paymentConfirm(paymentArr: Array<number>): Promise<Promise<unknown>[]>;
    editUserProfile(userId: any, form: any): Promise<boolean>;
    editConProfile(conId: any, form: any): Promise<boolean>;
    editPassword(userId: any, form: any): Promise<boolean>;
    getHot(): Promise<unknown>;
    getAllProduct(): Promise<unknown>;
}
