import { PrismaService } from "src/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
export declare class PublicService {
    private readonly prisma;
    private readonly jwt;
    private readonly config;
    getHot(): void;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    Register(form: any, identity: string, files: any | null): Promise<void>;
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
    signToken(userId: number, userIdentity: string): Promise<{
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
    displayPlatform(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        platform: string;
    }, unknown> & {})[]>;
    platformFilter(platformName: string): Promise<({
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
    tagFilter(tags: string[]): Promise<({
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
    searchVersion(id: number): Promise<unknown>;
    searchItem(version_id: number): Promise<unknown>;
    getMerchantByItemId(itemId: any): Promise<{
        itemId: number;
        merchantId: number;
        merchantName: string;
        merchantPhone: string;
    }>;
    searchText(Text: string): Promise<unknown>;
    version(productId: any, versionId: any): Promise<{
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
    district(productid: any, versionId: any, district: any): void;
    area(productid: any, versionId: any, area: any): void;
    priceDesc(productid: any, versionId: any): Promise<({
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
    priceAsec(productid: any, versionId: any): Promise<({
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
    ratingDesc(productid: any, versionId: any): void;
    ratingAsce(productid: any, versionId: any): void;
    displayOrderHistory(JWTpayload: any): void;
}
