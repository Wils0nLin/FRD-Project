export declare class MerchantService {
    getSelfInfo(userId: any): Promise<unknown>;
    editMerProfile(merchantId: any, form: any): Promise<import(".prisma/client").Merchant>;
    getAllItem(merId: any): Promise<unknown>;
    getComment(merId: any): Promise<unknown>;
    uploadItems(form: any, merchantId: number): Promise<import(".prisma/client").Item>;
    updateItems(itemId: any, form: any): Promise<boolean>;
    deleteItems(itemId: any): Promise<boolean>;
    pairUserId(consumerid: string): void;
    paymentConfirm(result: any): void;
    getOrderRecord(merId: any): Promise<unknown>;
    getAllProducts(): Promise<import(".prisma/client").Product[]>;
    getAllVersion(): Promise<import(".prisma/client").Version[]>;
}
