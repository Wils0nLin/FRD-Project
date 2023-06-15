export declare class ConsumerService {
    displayWishList(): void;
    uploadWishList(id: any): void;
    updateWishList(id: any): void;
    creatOrder(itemID: string): void;
    prePaymentConfirm(paymentStatus: any): void;
    remainPaymentConfirm(paymentStatus: any): void;
    getQrCodeId(userId: string): void;
    editProfile(form: any): void;
    feedback(merchantId: string, feedback: string): void;
    rating(merchantId: string, rating: number): void;
}
