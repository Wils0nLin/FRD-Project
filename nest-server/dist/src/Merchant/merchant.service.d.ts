export declare class MerchantService {
    getSelfInfo(userId: any): Promise<unknown>;
    editMerProfile(merchantId: any, form: any): Promise<import(".prisma/client").Merchant>;
    getAllItem(merId: any): Promise<unknown>;
    getComment(merId: any): Promise<unknown>;
    uploadItems(form: any, merchantId: number): Promise<import(".prisma/client").Item>;
    updateItems(itemId: any, form: any): Promise<boolean>;
    deleteItems(itemId: any): Promise<boolean>;
    getPreOrderItem(merId: any): Promise<unknown>;
    getPreOrderRecord(itemId: any): Promise<unknown>;
    getOrderRecord(merId: any): Promise<unknown>;
    getTradeInfo(form: any): Promise<unknown>;
    getOrderInfo(form: any): Promise<unknown>;
    updateOrder(orderId: any): Promise<boolean>;
    getAllProducts(): Promise<import(".prisma/client").Product[]>;
    getAllVersion(): Promise<import(".prisma/client").Version[]>;
}
