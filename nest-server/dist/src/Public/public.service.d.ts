import { PrismaService } from "src/prisma.service";
import { Users } from "@prisma/client";
import { CreateRegisterFormDTO } from "./dto/createPublic.dto";
export declare class PublicService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    register(form: CreateRegisterFormDTO, identity: string): Promise<Users>;
    login(userloginInfo: any): void;
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
    rating(productid: any, versionId: any): void;
    searchItem(productid: any, versionId: any, string: Array<string>): void;
    displayOrder(JWTpayload: any): void;
    displayOrderHistory(JWTpayload: any): void;
}