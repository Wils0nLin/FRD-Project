import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { PublicService } from "./public.service";
import { RegisterConFormDTO } from "./dto/createPublic.dto";
import { AnySrvRecord } from "dns";

@Controller("public")
export class PublicController {
    constructor(private readonly publicService: PublicService) {}

    // register
    //done
    @Post("register/conRegister")
    async conRegister(@Body() form: any) {
        const result = await this.publicService.Register(form, "consumer");

        return result;
    }
    //done
    @Post("register/merRegister")
    async merRegister(@Body() form: any) {
        return await this.publicService.Register(form, "merchant");
    }
    //

    // area and district only for register select
    //done
    @Get("register/selectArea")
    selectArea() {
        return this.publicService.selectArea();
    }
    //done
    @Get("register/selectDistrict")
    selectDistrict() {
        const area_id = 1; //後刪
        return this.publicService.selectDistrict(area_id);
    }

    //

    // area and district only for register select
    //done
    @Get("register/bank")
    bank() {
        return this.publicService.bank();
    }

    //done
    @Get("register/branch")
    branch() {
        const bank_id = 1;
        return this.publicService.branch(bank_id);
    }

    //done
    @Get("register/bank_acc")
    bank_acc() {
        const branch_id = 1;
        return this.publicService.bankAcc(branch_id);
    }

    //

    // login
    //done
    @Get("login")
    login(@Body() userLoginInfo: any) {
        return this.publicService.login(userLoginInfo);
    }
    //

    // hot game
    //按click rate and follow
    @Get("homepage/hot")
    hot() {
        return this.publicService.hot();
    }
    //

    // coming soon game
    // join product and version table，按照release day去做filter，例結if release day < 4 months
    @Get("homepage/comingsoon")
    comingSoon() {
        return this.publicService.comingSoon();
    }
    //

    // game type
    //done
    @Get("home/tag")
    displayTag() {
        return this.publicService.displayTag();
    }
    //done
    @Get("filter/tag")
    tagFilter(@Body("tag") tag: string[]) {
        return this.publicService.tagFilter(tag);
    }
    //

    // game platform
    //done
    @Get("home/platform")
    displayPlatform() {
        return this.publicService.displayPlatform();
    }

    //done
    @Get("filter/platform")
    async platformFilter() {
        return await this.publicService.platformFilter();
    }

    // search for search bar typing for game not version
    //done
    @Get("filter/search")
    search(@Body("search") search: string) {
        return this.publicService.search(search);
    }

    // only game version
    //未完
    @Get("filter/version")
    version(@Body() productid: any, versionId: any) {
        return this.publicService.version(productid, versionId);
    }
    //

    // game version with store area and district
    //未完
    @Get("filter/version/district")
    district(@Body() productid: any, versionId: any, district: any) {
        return this.publicService.district(productid, versionId, district);
    }
    //

    // game version with store area
    //未完
    @Get("filter/version/area")
    area(@Body() productid: any, versionId: any, area: any) {
        return this.publicService.area(productid, versionId, area);
    }
    //

    // game version with low to high price
    //done
    @Get("filter/version/pricedesc")
    priceDesc(@Body() productid: any, versionId: any) {
        return this.publicService.priceDesc(productid, versionId);
    }
    //

    // game version with high to low price
    //done
    @Get("filter/version/priceasce")
    priceAsec(@Body() productid: any, versionId: any) {
        return this.publicService.priceAsec(productid, versionId);
    }
    //

    //未做
    // game version with store rating low to high
    @Get("filter/version/ratingdesc")
    ratingDesc(@Body() productid: any, versionId: any) {
        return this.publicService.ratingDesc(productid, versionId);
    }
    //

    //未做
    // game version with store rating high to low
    @Get("filter/version/ratingasce")
    ratingAsce(@Body() productid: any, versionId: any) {
        return this.publicService.ratingAsce(productid, versionId);
    }
    //

    // search for search bar typing for version
    //未完
    @Get("filter/version/search")
    searchItem(productid: any, versionId: any, string: Array<string>) {
        return this.publicService.searchItem(productid, versionId, string);
    }
    //
}
