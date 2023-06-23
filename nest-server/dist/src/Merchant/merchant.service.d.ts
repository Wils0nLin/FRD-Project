export declare class MerchantService {
    getSelfInfo(userId: any): Promise<unknown>;
    editMerProfile(merchantId: any, form: any): Promise<import(".prisma/client").Merchant>;
    getAllItem(merId: any): Promise<unknown>;
    getComment(merId: any): Promise<unknown>;
    uploadItems(merchantId: number, productId: number, versionIds: number[], itemData: any): Promise<{
        product: import(".prisma/client").Product;
        versions: import(".prisma/client").Version[];
        items: import(".prisma/client").Item[];
    }>;
    updateItems(itemId: any, form: any): Promise<boolean>;
    deleteItems(itemId: any): Promise<boolean>;
    pairUserId(consumerid: string): void;
    paymentConfirm(result: any): void;
    getOrderRecord(merId: any): Promise<unknown>;
}
