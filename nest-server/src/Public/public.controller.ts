import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Query,
    UploadedFile,
    UploadedFiles,
    UseInterceptors,
} from "@nestjs/common";
import { PublicService } from "./public.service";
import { RegisterConFormDTO } from "./dto/createPublic.dto";
import { AnySrvRecord } from "dns";
import {
    AnyFilesInterceptor,
    FileFieldsInterceptor,
    FileInterceptor,
} from "@nestjs/platform-express";

@Controller("public")
export class PublicController {
    constructor(private readonly publicService: PublicService) {}

    // register
    //done
    @Post("register/conRegister")
    async conRegister(@Body() form: any) {
        const result = await this.publicService.Register(form, "consumer", null);

        return result;
    }
    //done
    @Post("register/merRegister")
    @UseInterceptors(
        FileFieldsInterceptor([
            { name: "IconImg", maxCount: 1 },
            { name: "RegisImg", maxCount: 1 },
        ])
    )
    async merRegister(
        @UploadedFiles()
        files: { IconImg?: Express.Multer.File[]; RegisImg?: Express.Multer.File[] },
        @Body() form: any
    ) {
        console.log(form);

        return await this.publicService.Register(form, "merchant", files);
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
        return this.publicService.selectDistrict();
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
        return this.publicService.branch();
    }

    //done
    //

    // login
    //done
    @Post("login")
    login(@Body() form: any) {
        return this.publicService.login(form);
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
    //done
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
    @Get("filter/tag/:tags")
    async tagFilter(@Param("tags") tags: any) {
        console.log(tags);
        return this.publicService.tagFilter(tags);
    }
    // @Get("filter/tag")
    // tagFilter(@Body("tag") tags: string[]) {
    //     return this.publicService.tagFilter(tags);
    // }
    //

    // game platform
    //done
    @Get("home/platform")
    displayPlatform() {
        return this.publicService.displayPlatform();
    }

    //done
    @Get("filter/platform/:platformName")
    async platformFilter(@Param("platformName") platformName: any) {
        console.log(platformName);
        return await this.publicService.platformFilter(platformName);
    }

    // search for search bar typing for game not version
    //done
    @Get("filter/search/:Texts")
    async searchText(@Param("Texts") Texts: string) {
        console.log(Texts);
        return this.publicService.searchText(Texts);
    }

    // only game version
    //done
    @Get("/filter/versions/:id")
    version(@Param("id") id: number) {
        console.log('i am version con',id)
        return this.publicService.searchVersion(id);
    }
    @Get("/filter/Items/:id")
    item(@Param("id") id: number) {
        console.log('i am item con',id)

        return this.publicService.searchItem(id);
    }
    // @Get("filter/version")
    // version(@Body() productId: any, itemId: any) {
    //     productId = 1;
    //     return this.publicService.version(productId, itemId);
    // }
    //

    // game version with store area and district
    //未完
    @Get("filter/version/district")
    district(@Body() productId: any, versionId: any, district: any) {
        productId = 2;
        return this.publicService.district(productId, versionId, district);
    }
    //

    // game version with store area
    //未完
    @Get("filter/version/area")
    area(@Body() productId: any, versionId: any, area: any) {
        return this.publicService.area(productId, versionId, area);
    }
    //

    // game version with low to high price
    //done
    @Get("filter/version/pricedesc")
    priceDesc(@Body() productId: any, versionId: any) {
        return this.publicService.priceDesc(productId, versionId);
    }
    //

    // game version with high to low price
    //done
    @Get("filter/version/priceasce")
    priceAsec(@Body() productId: any, versionId: any) {
        return this.publicService.priceAsec(productId, versionId);
    }
    //

    //未做
    // game version with store rating low to high
    @Get("filter/version/ratingdesc")
    ratingDesc(@Body() productId: any, versionId: any) {
        return this.publicService.ratingDesc(productId, versionId);
    }
    //

    //未做
    // game version with store rating high to low
    @Get("filter/version/ratingasce")
    ratingAsce(@Body() productId: any, versionId: any) {
        return this.publicService.ratingAsce(productId, versionId);
    }
    //

    // search for search bar typing for version
    //未完
   
}
