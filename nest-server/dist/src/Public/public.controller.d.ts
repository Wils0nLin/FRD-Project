import { PublicService } from "./public.service";
export declare class PublicController {
    private readonly publicService;
    constructor(publicService: PublicService);
    conRegister(form: any): Promise<void>;
    merRegister(form: any): Promise<void>;
    login(userloginInfo: any): Promise<import(".prisma/client").Users[]>;
    hot(): string;
    comingSoon(): void;
    displayTag(): void;
    tagFilter(tag: Array<string>): void;
    displayPlatform(): void;
    platformFilter(platform: Array<string>): void;
    search(string: Array<string>): void;
    version(productid: any, versionId: any): void;
    district(productid: any, versionId: any, district: any): void;
    area(productid: any, versionId: any, area: any): void;
    priceDesc(productid: any, versionId: any): void;
    priceAsec(productid: any, versionId: any): void;
    ratingDesc(productid: any, versionId: any): void;
    ratingAsce(productid: any, versionId: any): void;
    searchItem(productid: any, versionId: any, string: Array<string>): void;
}
