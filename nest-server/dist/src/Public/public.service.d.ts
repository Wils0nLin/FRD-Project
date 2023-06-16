import { PrismaService } from "src/prisma.service";
import { Users } from "@prisma/client";
export declare class PublicService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    Register(form: any, identity: string): Promise<void>;
    selectArea(): Promise<import(".prisma/client").Area[]>;
    selectDistrict(area_id: number): Promise<import(".prisma/client").District[]>;
    bank(): Promise<import(".prisma/client").Bank[]>;
    branch(bank_id: number): Promise<import(".prisma/client").Branch[]>;
    bankAcc(branch_id: number): Promise<import(".prisma/client").Bank_acc[]>;
    login(userLoginInfo: any): Promise<Users[]>;
    hot(): string;
    comingSoon(): void;
    displayTag(): Promise<import(".prisma/client").Tag[]>;
    displayPlatform(): Promise<import(".prisma/client").Platform[]>;
    tagFilter(tag: Array<string>): Promise<import(".prisma/client").Tag[]>;
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
    displayOrder(JWTpayload: any): void;
    displayOrderHistory(JWTpayload: any): void;
}
