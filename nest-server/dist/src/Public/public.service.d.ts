import { PrismaService } from "src/prisma.service";
import { Users } from "@prisma/client";
export declare class PublicService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    register(form: any, identity: string): Promise<void>;
    login(userloginInfo: any): Promise<Users[]>;
    hot(): string;
    comingSoon(): void;
    displayTag(): void;
    displayPlatform(): void;
    platformFilter(platform: Array<string>): void;
    tagFilter(tag: Array<string>): void;
    search(string: Array<string>): void;
    version(productid: any, versionId: any): void;
    district(productid: any, versionId: any, district: any): void;
    area(productid: any, versionId: any, area: any): void;
    priceDesc(productid: any, versionId: any): void;
    priceAsec(productid: any, versionId: any): void;
    ratingDesc(productid: any, versionId: any): void;
    ratingAsce(productid: any, versionId: any): void;
    searchItem(productid: any, versionId: any, string: Array<string>): void;
    displayOrder(JWTpayload: any): void;
    displayOrderHistory(JWTpayload: any): void;
}
