export declare class MerchantService {
    editMerProfile(merchantId: any, form: any): Promise<import(".prisma/client").Merchant>;
    uploadItems(merchantId: number, productId: number, versionIds: number[], itemData: any): Promise<{
        product: import(".prisma/client").Product;
        versions: import(".prisma/client").Version[];
        items: import(".prisma/client").Item[];
    }>;
    updateItems(form: any): void;
    changeItemStatus(itemId: number, stock_status: any): Promise<import(".prisma/client").Item>;
    handleChangeStatus(formData: any): Promise<import(".prisma/client").Item> | undefined;
    pairUserId(consumerid: string): void;
    paymentConfirm(result: any): void;
    getAllProducts(): Promise<import(".prisma/client").Product[]>;
}
