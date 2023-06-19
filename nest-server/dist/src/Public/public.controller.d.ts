/// <reference types="multer" />
import { PublicService } from "./public.service";
export declare class PublicController {
    private readonly publicService;
    constructor(publicService: PublicService);
    conRegister(form: any): Promise<void>;
    merRegister(file: Express.Multer.File, form: any): Promise<Express.Multer.File>;
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
    tagFilter(tagss: string[]): Promise<(import(".prisma/client").Product & {
        product_tags: import(".prisma/client").Product_tag[];
    })[]>;
    displayPlatform(): Promise<import(".prisma/client").Platform[]>;
    platformFilter(platformName: any): Promise<(import(".prisma/client").Platform & {
        products: (import(".prisma/client").Product & {
            versions: import(".prisma/client").Version[];
        })[];
    })[]>;
    platformFilter(platformName: any): Promise<void>;
    search(search: string): Promise<{
        merchant: unknown;
        version: unknown;
    }>;
    getItem(): Promise<{
        itemId: number;
        merchantId: number;
        merchantName: string;
        merchantPhone: string;
    } | {
        error: any;
    }>;
    version(): Promise<{
        versionId: number;
        versionName: string;
        items: {
            itemId: number;
            merchant: {
                itemId: number;
                merchantId: number;
                merchantName: string;
                merchantPhone: string;
            };
        }[];
    }>;
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
    searchItem(productId: any, versionId: any, string: Array<string>): void;
}
