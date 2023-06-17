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
    displayTag(): void;
    tagFilter(tag: string[]): Promise<(import(".prisma/client").Product & {
        product_tags: import(".prisma/client").Product_tag[];
    })[]>;
    displayPlatform(): void;
    platformFilter(): Promise<(import(".prisma/client").Platform & {
        products: (import(".prisma/client").Product & {
            versions: import(".prisma/client").Version[];
        })[];
    })[]>;
    search(search: string): Promise<{
        merchant: (import(".prisma/client").Merchant & {
            district: import(".prisma/client").District & {
                area: import(".prisma/client").Area;
            };
        })[];
        version: (import(".prisma/client").Version & {
            product: import(".prisma/client").Product;
        })[];
    }>;
    version(productid: any, versionId: any): void;
    district(productid: any, versionId: any, district: any): void;
    area(productid: any, versionId: any, area: any): void;
    priceDesc(productid: any, versionId: any): Promise<(import(".prisma/client").Item & {
        version: import(".prisma/client").Version & {
            product: import(".prisma/client").Product;
        };
    })[]>;
    priceAsec(productid: any, versionId: any): Promise<(import(".prisma/client").Item & {
        version: import(".prisma/client").Version & {
            product: import(".prisma/client").Product;
        };
    })[]>;
    ratingDesc(productid: any, versionId: any): void;
    ratingAsce(productid: any, versionId: any): void;
    searchItem(productid: any, versionId: any, string: Array<string>): void;
}
