import { Body, Controller, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { MerchantService } from "./merchant.service";
import { PublicService } from "src/Public/public.service";

@Controller("merchant")
export class MerchantController {
    constructor(
        private readonly merchantService: MerchantService,
        private readonly publicService: PublicService
    ) {}

    @Get("userInfo/:userId")
    async getSelfInfo(@Param("userId") userId: any) {
        return await this.merchantService.getSelfInfo(userId);
    }

    //edit商戶係註冊ac時嘅資料
    //done but not firm 可用JWT攞merchant id
    @Put("/profile/edit/:merchantId")
    async editMerProfile(@Param("merchantId") merchantId: any, @Body() form: any) {
        return await this.merchantService.editMerProfile(merchantId, form);
    }

    // @Post("edit")
    // editProfile(@Body() form: any) {
    //     return this.merchantService.editProfile(form);
    // }
    // ---------------------------------------------------------------------------------------------------------
    @Get("allItem/:userId")
    async getAllItem(@Param("userId") userId: any) {
        return await this.merchantService.getAllItem(userId);
    }

    //商戶upload game
    //商戶要先透過search bar搵到admin預先set好嘅product and version, Get左個product and version id，return番出去比商戶set price, status, stock
    //done
    @Post("uploadItems")
    async uploadItems(@Body() form: any) {
        const merchantId = 1;
        // const productId = 2;
        // const versionIds = [3, 4];
        try {
            const result = await this.merchantService.uploadItems(form, merchantId);
            return { success: true, data: result };
        } catch (error) {
            console.log("itemData: ", error);

            return { success: false, error: error.message };
        }
    }

    // @Post("upload")
    // upLoadItems(@Body() form: any) {
    //     return this.merchantService.upLoadItems(form);
    // }
    // ---------------------------------------------------------------------------------------------------------

    @Post("update")
    updateItems(@Body() form: any) {
        return this.merchantService.updateItems(form);
    }

    // ---------------------------------------------------------------------------------------------------------
    //更改item嘅狀態，係可預訂，完結預訂，有存貨
    @Put("changeStatus/:itemId")
    //done but not firm
    async changeItemStatus(
        @Param("itemId") itemId: number,
        @Body() formData: { stock_status: any }
    ) {
        try {
            const changeItemStatus = await this.merchantService.changeItemStatus(
                itemId,
                formData.stock_status
            );
            console.log(changeItemStatus);

            return { success: true, data: changeItemStatus };
        } catch (error) {
            return { success: false, error: error.message };
        }
        // console.log(
        //     `change item status to 3 possible status "receiving pre-order","end of pre-order","in-stock",if start pre-order update period of time `
        // );
        // return this.merchantService.changeItemStatus(itemId, newState);
    }
    // ---------------------------------------------------------------------------------------------------------
    //
    @Get("scanner/:userId")
    pairUserId(@Param() parms: any) {
        console.log(
            `scanning the consumer qr code will get the item by merchant id and consumer id `
        );
        return this.merchantService.pairUserId(parms.userId);
    }
    // ---------------------------------------------------------------------------------------------------------
    @Post("Result")
    paymentConfirm(@Body() resultStatus: any) {
        console.log("get payment result by stripe any display success or not");
        return this.merchantService.paymentConfirm(resultStatus);
    }

    // ---------------------------------------------------------------------------------------------------------
    // get all products
    @Get("product")
    getAllProducts() {
        return this.merchantService.getAllProducts();
    }

    @Get("product/version")
    getAllVersion() {
        return this.merchantService.getAllVersion();
    }
}
