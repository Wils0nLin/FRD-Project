export declare class MerchantService {
    getSelfInfo(userId: any): Promise<unknown>;
    editMerProfile(merchantId: any, form: any): Promise<import(".prisma/client").Merchant>;
    getAllItem(userId: any): Promise<unknown>;
    uploadItems(form: any, merchantId: number): Promise<import(".prisma/client").Item>;
    updateItems(form: any): void;
    changeItemStatus(itemId: number, stock_status: any): Promise<import(".prisma/client").Item>;
    handleChangeStatus(formData: any): Promise<import(".prisma/client").Item> | undefined;
    pairUserId(consumerid: string): void;
    paymentConfirm(result: any): void;
    getAllProducts(): Promise<import(".prisma/client").Product[]>;
    getAllVersion(): Promise<import(".prisma/client").Version[]>;
}
