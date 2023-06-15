import { ConsumerService } from './consumer.service';
import { PublicService } from 'src/Public/public.service';
export declare class ConsumerController {
    private readonly consumerService;
    private readonly publicService;
    constructor(consumerService: ConsumerService, publicService: PublicService);
    getQrCodeId(JWTpayload: any): void;
    displayWishList(): void;
    uploadWishList(parm: any): void;
    updateWishList(parm: any): void;
    displayOrder(JWTpayload: any): void;
    displayOrderHistory(JWTpayload: any): void;
    createOrder(param: any): void;
    prePaymentConfirm(paymentstatus: any): void;
    remainPaymentConfirm(paymentstatus: any): void;
    editProfile(form: any): void;
    feedback(reaction: any): void;
    rating(reaction: any): void;
}
