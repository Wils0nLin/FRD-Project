import { PublicService } from "./public.service";
export declare class PublicController {
    private readonly publicService;
    constructor(publicService: PublicService);
    conRegister(form: any): Promise<void>;
    merRegister(form: any): Promise<void>;
    selectArea(): Promise<import(".prisma/client").Area[]>;
    selectDistrict(): Promise<import(".prisma/client").District[]>;
    bank(): Promise<import(".prisma/client").Bank[]>;
    branch(): Promise<import(".prisma/client").Branch[]>;
    bank_acc(): Promise<import(".prisma/client").Bank_acc[]>;
    login(userLoginInfo: any): Promise<import(".prisma/client").Users[]>;
    hot(): string;
    comingSoon(): void;
    displayTag(): Promise<import(".prisma/client").Tag[]>;
    tagFilter(tag: Array<string>): Promise<import(".prisma/client").Tag[]>;
    displayPlatform(): Promise<import(".prisma/client").Platform[]>;
    search(search: any): Promise<{
        merchant: (import(".prisma/client").Merchant & {
            district: import(".prisma/client").District;
        })[];
        version: (import(".prisma/client").Version & {
            product: import(".prisma/client").Product;
        })[];
    }>;
    version(productid: any, versionId: any): void;
    district(productid: any, versionId: any, district: any): void;
    area(productid: any, versionId: any, area: any): void;
    priceDesc(productid: any, versionId: any): void;
    priceAsec(productid: any, versionId: any): void;
    ratingDesc(productid: any, versionId: any): void;
    ratingAsce(productid: any, versionId: any): void;
    searchItem(productid: any, versionId: any, string: Array<string>): void;
}
