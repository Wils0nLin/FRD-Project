import { PrismaService } from "src/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
export declare class PublicService {
    private readonly prisma;
    private readonly jwt;
    private readonly config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    Register(form: any, identity: string): Promise<void>;
    selectArea(): Promise<import(".prisma/client").Area[]>;
    selectDistrict(area_id: number): Promise<import(".prisma/client").District[]>;
    bank(): Promise<import(".prisma/client").Bank[]>;
    branch(bank_id: number): Promise<import(".prisma/client").Branch[]>;
    bankAcc(branch_id: number): Promise<import(".prisma/client").Bank_acc[]>;
    login(form: any): Promise<{
        access_token: string;
    }>;
    signToken(userId: number, userIdentity: string): Promise<{
        access_token: string;
    }>;
    hot(): string;
    comingSoon(): Promise<import(".prisma/client").Product[]>;
    displayTag(): Promise<import(".prisma/client").Tag[]>;
    displayPlatform(): Promise<import(".prisma/client").Platform[]>;
    platformFilter(platformName: string): Promise<(import(".prisma/client").Platform & {
        products: (import(".prisma/client").Product & {
            versions: import(".prisma/client").Version[];
        })[];
    })[]>;
    tagFilter(tags: string[]): Promise<(import(".prisma/client").Product & {
        product_tags: import(".prisma/client").Product_tag[];
    })[]>;
    search(search: string): Promise<{
        merchant: unknown;
        version: unknown;
    }>;
    getMerchantByItemId(itemId: any): Promise<{
        itemId: number;
        merchantId: number;
        merchantName: string;
        merchantPhone: string;
    }>;
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
    displayOrder(JWTpayload: any): void;
    displayOrderHistory(JWTpayload: any): void;
}
