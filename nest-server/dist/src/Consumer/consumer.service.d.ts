import { Prisma } from "@prisma/client";
export declare class ConsumerService {
    getSelfInfo(userId: any): Promise<unknown>;
    test(): Promise<unknown>;
    deleteOrder(id: number): Promise<unknown>;
    displayOrder(JWTpayload: any): Promise<unknown>;
    uploadWishList(consumerId: number, productId: number, versionId: number, targetPrice: number, notification: boolean): Promise<void>;
    deleteWishList(consumerId: number, productId: number, versionId: number): Promise<Prisma.BatchPayload>;
    createOrder(form: any): Promise<unknown>;
    paymentIntent(): void;
    editUserProfile(userId: any, form: any): Promise<boolean>;
    editConProfile(conId: any, form: any): Promise<boolean>;
    editPassword(userId: any, form: any): Promise<boolean>;
}
