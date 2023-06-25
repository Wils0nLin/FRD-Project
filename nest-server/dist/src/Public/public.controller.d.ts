/// <reference types="multer" />
import { PublicService } from "./public.service";
export declare class PublicController {
    private readonly publicService;
    constructor(publicService: PublicService);
    conRegister(form: any): Promise<void>;
    merRegister(files: {
        IconImg?: Express.Multer.File[];
        RegisImg?: Express.Multer.File[];
    }, form: any): Promise<void>;
    selectArea(): Promise<import(".prisma/client").Area[]>;
    selectDistrict(): Promise<import(".prisma/client").District[]>;
    bank(): Promise<import(".prisma/client").Bank[]>;
    branch(): Promise<import(".prisma/client").Branch[]>;
    login(form: any): Promise<{
        access_token: string;
    }>;
    hot(): string;
    comingSoon(): Promise<import(".prisma/client").Product[]>;
    displayTag(): Promise<import(".prisma/client").Tag[]>;
    tagFilter(tags: any): Promise<(import(".prisma/client").Product & {
        product_tags: import(".prisma/client").Product_tag[];
    })[]>;
    displayPlatform(): Promise<import(".prisma/client").Platform[]>;
    platformFilter(platformName: any): Promise<(import(".prisma/client").Platform & {
        products: (import(".prisma/client").Product & {
            versions: import(".prisma/client").Version[];
        })[];
    })[]>;
    searchText(Texts: string): Promise<unknown>;
    version(id: number): Promise<unknown>;
    item(id: number): Promise<unknown>;
    district(productId: any, versionId: any, district: any): void;
    area(productId: any, versionId: any, area: any): void;
    priceDesc(productId: any, versionId: any): Promise<(import(".prisma/client").Item & {
        version: import(".prisma/client").Version & {
            product: import(".prisma/client").Product;
        };
    })[]>;
    priceAsec(productId: any, versionId: any): Promise<(import(".prisma/client").Item & {
        version: import(".prisma/client").Version & {
            product: import(".prisma/client").Product;
        };
    })[]>;
    ratingDesc(productId: any, versionId: any): void;
    ratingAsce(productId: any, versionId: any): void;
    getProductInfo(productId: any): Promise<unknown>;
    getProductItem(productId: any): Promise<unknown>;
    getProductVersion(productId: any): Promise<unknown>;
    getVersionItem(versionId: any): Promise<unknown>;
}
