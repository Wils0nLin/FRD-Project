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
    selectArea(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        area: string;
    }, unknown> & {})[]>;
    selectDistrict(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        area_id: number;
        district: string;
    }, unknown> & {})[]>;
    bank(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        bank_code: string;
        bank_name: string;
    }, unknown> & {})[]>;
    branch(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        bank_id: number;
        branch_code: string;
        branch_name: string;
    }, unknown> & {})[]>;
    login(form: any): Promise<{
        access_token: string;
    }>;
    hot(): string;
    comingSoon(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        product_name: string;
        product_status: boolean;
        product_image: string;
        release_date: string;
        product_intro: string;
        view: number;
        platform_id: number;
    }, unknown> & {})[]>;
    displayTag(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        tag: string;
    }, unknown> & {})[]>;
    tagFilter(tags: any): Promise<({
        product_tags: (import("@prisma/client/runtime").GetResult<{
            id: number;
            product_id: number;
            tag_id: number;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        product_name: string;
        product_status: boolean;
        product_image: string;
        release_date: string;
        product_intro: string;
        view: number;
        platform_id: number;
    }, unknown> & {})[]>;
    displayPlatform(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        platform: string;
    }, unknown> & {})[]>;
    platformFilter(platformName: any): Promise<({
        products: ({
            versions: (import("@prisma/client/runtime").GetResult<{
                id: number;
                product_id: number;
                version: string;
                version_image: string;
            }, unknown> & {})[];
        } & import("@prisma/client/runtime").GetResult<{
            id: number;
            product_name: string;
            product_status: boolean;
            product_image: string;
            release_date: string;
            product_intro: string;
            view: number;
            platform_id: number;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        platform: string;
    }, unknown> & {})[]>;
    searchText(Texts: string): Promise<unknown>;
    version(id: number): Promise<unknown>;
    item(id: number): Promise<unknown>;
    district(productId: any, versionId: any, district: any): void;
    area(productId: any, versionId: any, area: any): void;
    priceDesc(productId: any, versionId: any): Promise<({
        version: {
            product: import("@prisma/client/runtime").GetResult<{
                id: number;
                product_name: string;
                product_status: boolean;
                product_image: string;
                release_date: string;
                product_intro: string;
                view: number;
                platform_id: number;
            }, unknown> & {};
        } & import("@prisma/client/runtime").GetResult<{
            id: number;
            product_id: number;
            version: string;
            version_image: string;
        }, unknown> & {};
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        merchant_id: number;
        version_id: number;
        price: number;
        end_date: string;
        stock_status: string;
        availability: boolean;
    }, unknown> & {})[]>;
    priceAsec(productId: any, versionId: any): Promise<({
        version: {
            product: import("@prisma/client/runtime").GetResult<{
                id: number;
                product_name: string;
                product_status: boolean;
                product_image: string;
                release_date: string;
                product_intro: string;
                view: number;
                platform_id: number;
            }, unknown> & {};
        } & import("@prisma/client/runtime").GetResult<{
            id: number;
            product_id: number;
            version: string;
            version_image: string;
        }, unknown> & {};
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        merchant_id: number;
        version_id: number;
        price: number;
        end_date: string;
        stock_status: string;
        availability: boolean;
    }, unknown> & {})[]>;
    ratingDesc(productId: any, versionId: any): void;
    ratingAsce(productId: any, versionId: any): void;
    getProductInfo(productId: any): Promise<unknown>;
    getProductItem(productId: any): Promise<unknown>;
    getProductVersion(productId: any): Promise<unknown>;
    getVersionItem(versionId: any): Promise<unknown>;
}
