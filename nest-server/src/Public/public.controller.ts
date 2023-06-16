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
    @Get("homepage/hot")
    hot() {
        return this.publicService.hot();
    }
    //

    // coming soon game
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
    tagFilter(@Body() tag: Array<string>) {
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
    // @Get("filter/platform")
    // platformFilter(@Body() platform: string) {
    //     return this.publicService.platformFilter(platform);
    // }
    //

    // search for search bar typing for game not version
    //done
    @Get("filter/search")
    search(@Query("search") search: any) {
        return this.publicService.search(search);
    }

    // only game version
    @Get("filter/version")
    version(@Body() productid: any, versionId: any) {
        return this.publicService.version(productid, versionId);
    }
    //

    // game version with store area and district
    @Get("filter/version/district")
    district(@Body() productid: any, versionId: any, district: any) {
        return this.publicService.district(productid, versionId, district);
    }
    //

    // game version with store area
    @Get("filter/version/area")
    area(@Body() productid: any, versionId: any, area: any) {
        return this.publicService.area(productid, versionId, area);
    }
    //

    // game version with low to high price
    @Get("filter/version/pricedesc")
    priceDesc(@Body() productid: any, versionId: any) {
        return this.publicService.priceDesc(productid, versionId);
    }
    //

    // game version with high to low price
    @Get("filter/version/priceasce")
    priceAsec(@Body() productid: any, versionId: any) {
        return this.publicService.priceDesc(productid, versionId);
    }
    //

    // game version with store rating low to high
    @Get("filter/version/ratingdesc")
    ratingDesc(@Body() productid: any, versionId: any) {
        return this.publicService.ratingDesc(productid, versionId);
    }
    //

    // game version with store rating high to low
    @Get("filter/version/ratingasce")
    ratingAsce(@Body() productid: any, versionId: any) {
        return this.publicService.ratingAsce(productid, versionId);
    }
    //

    // search for search bar typing for version
    @Get("filter/version/search")
    searchItem(productid: any, versionId: any, string: Array<string>) {
        return this.publicService.searchItem(productid, versionId, string);
    }
    //
}
