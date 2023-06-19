import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Query,
    UploadedFile,
    UseInterceptors,
} from "@nestjs/common";
import { PublicService } from "./public.service";
import { RegisterConFormDTO } from "./dto/createPublic.dto";
import { AnySrvRecord } from "dns";
import { AnyFilesInterceptor, FileFieldsInterceptor, FileInterceptor } from "@nestjs/platform-express";

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
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'IconImg', maxCount: 1},
        {name: 'RegisImg', maxCount: 1}
    ]))
    async merRegister(@UploadedFile() file: Express.Multer.File, @Body() form: any) {
        console.log(file, form);
        return file;
        // return await this.publicService.Register(form, "merchant");
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
    @Get("/filter/version/:itemId/merchant")
    async getItem() {
        const itemId = 1;
        try {
            const merchant = await this.publicService.getMerchantByItemId(itemId);
            return merchant;
        } catch (error) {
            return { error: error.message };
        }
    }
    //done
    @Get("/filter/version")
    version() {
        let productId = 1;
        let versionId = 1;
        // const { productId, itemId } = body;
        return this.publicService.version(productId, versionId);
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
    @Get("filter/version/search")
    searchItem(productId: any, versionId: any, string: Array<string>) {
        return this.publicService.searchItem(productId, versionId, string);
    }
    //
}
