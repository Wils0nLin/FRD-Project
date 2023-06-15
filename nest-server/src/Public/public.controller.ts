import { Body, Controller, Get, Post } from "@nestjs/common";
import { PublicService } from "./public.service";
import { CreateRegisterFormDTO } from "./dto/createPublic.dto";

@Controller("public")
export class PublicController {
    constructor(private readonly publicService: PublicService) {}

    @Post("conRegister")
    conRegister(@Body() form: CreateRegisterFormDTO) {
        // console.log("conRegister");
        // form = { username: "hi", password: "123", email: "123@123.com" };
        console.log(form);
        return this.publicService.register(form, "consumer");
    }
    @Post("merRegister")
    merRegister(@Body() form: CreateRegisterFormDTO) {
        return this.publicService.register(form, "merchant");
    }

    @Get("login")
    login(@Body() userloginInfo: any) {
        return this.publicService.login(userloginInfo);
    }
    @Get("homepage/hot")
    hot() {
        return this.publicService.hot();
    }
    @Get("homepage/comingsoon")
    comingSoon() {
        return this.publicService.comingSoon();
    }
    @Get("home/tag")
    displayTag() {
        return this.publicService.displayTag();
    }
    @Get("home/platform")
    displayPlatform() {
        return this.publicService.displayPlatform();
    }
    @Get("filter/platform")
    platformFilter(@Body() platform: Array<string>) {
        return this.publicService.platformFilter(platform);
    }
    @Get("filter/tag")
    tagFilter(@Body() tag: Array<string>) {
        return this.publicService.tagFilter(tag);
    }
    @Get("filter/search")
    search(string: Array<string>) {
        return this.publicService.search(string);
    }
    @Get("filter/version")
    version(@Body() productid: any, versionId: any) {
        return this.publicService.version(productid, versionId);
    }
    @Get("filter/version/district")
    district(@Body() productid: any, versionId: any, district: any) {
        return this.publicService.district(productid, versionId, district);
    }
    @Get("filter/version/area")
    area(@Body() productid: any, versionId: any, area: any) {
        return this.publicService.area(productid, versionId, area);
    }
    @Get("filter/version/pricedesc")
    priceDesc(@Body() productid: any, versionId: any) {
        return this.publicService.priceDesc(productid, versionId);
    }

    @Get("filter/version/priceasce")
    priceAsec(@Body() productid: any, versionId: any) {
        return this.publicService.priceDesc(productid, versionId);
    }
    @Get("filter/version/rating")
    rating(@Body() productid: any, versionId: any) {
        return this.publicService.rating(productid, versionId);
    }
    @Get("filter/version/search")
    searchItem(productid: any, versionId: any, string: Array<string>) {
        return this.publicService.searchItem(productid, versionId, string);
    }
}
