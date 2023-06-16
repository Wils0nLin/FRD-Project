import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { PublicService } from "./public.service";
import { RegisterConFormDTO } from "./dto/createPublic.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("public")
export class PublicController {
    constructor(private readonly publicService: PublicService) {}
    // register
    @Post("conRegister")
    conRegister(@Body() form: any) {
        console.log(form);
        return this.publicService.register(form, "consumer");
    }
    @Post("merRegister")
    merRegister(@Body() form: any) {
        return this.publicService.register(form, "merchant");
    }
    //

    // login
    @Get("login")
    login(@Body() userloginInfo: any) {
        return this.publicService.login(userloginInfo);
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
    @Get("home/tag")
    displayTag() {
        return this.publicService.displayTag();
    }
    @Get("filter/tag")
    tagFilter(@Body() tag: Array<string>) {
        return this.publicService.tagFilter(tag);
    }
    //

    // game platform
    @Get("home/platform")
    displayPlatform() {
        return this.publicService.displayPlatform();
    }
    @Get("filter/platform")
    platformFilter(@Body() platform: Array<string>) {
        return this.publicService.platformFilter(platform);
    }
    //

    // search for search bar typing for game not version
    @Get("filter/search")
    search(string: Array<string>) {
        return this.publicService.search(string);
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
