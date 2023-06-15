export class RegisterUserFormDTO {
    username: string;
    password: string;
    email: string;
}
export class RegisterConFormDTO {
    users_id: number;
    QRcode: string;
    consumer_name: string;
    consumer_phone: string;
}
export class RegisterMerFormDTO {
    users_id: number;
    merchant_image: string;
    merchant_name: string;
    merchant_phone: string;
    biz_registration: string;
    district_id: number;
    address: string;
    back_acc_id: number;
    opening_hour: string;
    announcement: string;
}
