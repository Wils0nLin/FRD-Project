import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { ConsumerService } from "./consumer.service";
import { PublicService } from "src/Public/public.service";
import { JwtGuard } from "src/Public/guard";
import { GetUser } from "src/Public/decorator";
import { userInfo } from "os";
@Controller("consumer")
export class ConsumerController {
    constructor(
        private readonly consumerService: ConsumerService,
        private readonly publicService: PublicService
    ) {}
    @Get("userInfo/:userId")
    async getSelfInfo(@Param("userId") userId: any) {
        return await this.consumerService.getSelfInfo(userId);
    }

    // ---------------------------------------------------------------------------------------------------------
    // 未攞到consumer id
    @Get("wishlist")
    displayWishList(@Query("consumer_id") consumer_id: number) {
        return this.consumerService.displayWishList(consumer_id);
    }
    // ---------------------------------------------------
    //done
    @Post("wishlist/upload")
    async uploadWishList(
        @Body("consumerId") consumerId: number,
        @Body("productId") productId: number
    ) {
        try {
            const uploadWishList = await this.consumerService.uploadWishList(consumerId, productId);
            return { success: true, data: uploadWishList };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // ---------------------------------------------------
    //done
    @Delete("wishlist/delete/")
    async deleteWishList(@Body() consumerId: number, productId: number) {
        try {
            const deleteWishList = await this.consumerService.deleteWishList(consumerId, productId);
            return { success: true, data: deleteWishList };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // ---------------------------------------------------------------------------------------------------------
    @Get("shopInfo/:shopId")
    async getShopInfo(@Param("shopId") shopId: any) {
        return await this.consumerService.getShopInfo(shopId);
    }
    
    // ---------------------------------------------------------------------------------------------------------
    @Get("order/:JWT")
    displayOrder(@Param("JWT") JWTpayload: any) {
        console.log();
        return this.consumerService.displayOrder(JWTpayload);
    }
    @Get("order/delete/:id")
    deleteOrder(@Param("id") id: number) {
        console.log(id);
        return this.consumerService.deleteOrder(Number(id));
    }
    @Get("order/history/:userId")
    displayOrderHistory(@Param('userId') userId: any) {
        console.log(userId)
        return this.consumerService.getOrderRecord(userId)
    }
    @Post("order/create")
    createOrder(@Body() form: any) {
        console.log(form);
        return this.consumerService.createOrder(form);
    }

    //full pay
    @Post("order/payment")
    paymentConfirm(@Body() paymentArr: any) {
        console.log();
        return this.consumerService.paymentConfirm(paymentArr.idArr);
    }

    // ---------------------------------------------------------------------------------------------------------
    //done
    @Put("userProfile/edit/:userId")
    async editUserProfile(@Param("userId") userId: any, @Body() form: any) {
        return await this.consumerService.editUserProfile(userId, form);
    }

    @Put("conProfile/edit/:conId")
    async editConProfile(@Param("conId") conId: any, @Body() form: any) {
        return await this.consumerService.editConProfile(conId, form);
    }

    @Put("password/edit/:userId")
    async editPassword(@Param("userId") userId: any, @Body() form: any) {
        return await this.consumerService.editPassword(userId, form);
    }

    // ---------------------------------------------------------------------------------------------------------
    // get hot game
    @Get("hot")
    getHot() {
        return this.consumerService.getHot();
    }
}
