import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { ConsumerService } from "./consumer.service";
import { PublicService } from "src/Public/public.service";
import { JwtGuard } from "src/Public/guard";
import { GetUser } from "src/Public/decorator";
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
    @Get("qrcode")
    getQrCodeId(@Body() JWTpayload: any) {
        return this.consumerService.getQrCodeId(JWTpayload);
    }
    // ---------------------------------------------------------------------------------------------------------
    //未攞到consumer id
    // @Get("wishlist")
    // displayWishList(@Query("consumer_id") consumer_id: number) {
    //     return this.consumerService.displayWishList(consumer_id);
    // }
    // ---------------------------------------------------
    //done
    @Post("wishlist/upload")
    async uploadWishList(@Body() formData: any) {
        let consumerId = 2;
        let productId = 2;
        let versionId = 1;

        try {
            const { targetPrice, notification } = formData;
            const uploadWishList = await this.consumerService.uploadWishList(
                consumerId,
                productId,
                versionId,
                targetPrice,
                notification
            );
            return { success: true, data: uploadWishList };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // @Post("wishlist/upload/")
    // async uploadWishList(@Body() parm: any) {
    //     return this.consumerService.uploadWishList(parm.id);
    // }
    // ---------------------------------------------------
    //done
    @Delete("wishlist/delete/")
    async deleteWishList(@Body() requestData: any) {
        // const { consumerId, productId, versionId } = requestData;
        const consumerId = 1;
        const productId = 1;
        const versionId = 1;
        try {
            const deleteWishList = await this.consumerService.deleteWishList(
                consumerId,
                productId,
                versionId
            );
            return { success: true, data: deleteWishList };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
    // @Delete("wishlist/update/")
    // async deleteWishList(@Body() parm: any) {

    //     return this.consumerService.updateWishList(parm.id);
    // }
    // ---------------------------------------------------------------------------------------------------------
    @Get("order")
    displayOrder(@Body() JWTpayload: any) {
        return this.publicService.displayOrder(JWTpayload);
    }
    @Get("order/history")
    displayOrderHistory(@Body() JWTpayload: any) {
        return this.publicService.displayOrderHistory(JWTpayload);
    }
    @Post("order/create/:itemId")
    createOrder(@Param() itemId: any) {
        try {
        } catch (error) {}
        return this.consumerService.createOrder(itemId);
    }
    // @Post("order/create/")
    // createOrder(@Body() param: any) {

    //     return this.consumerService.createOrder(param.itemId);
    // }

    //full pay
    @Post("order/payment")
    paymentConfirm(@Body() paymentstatus: any) {
        return this.consumerService.paymentConfirm(paymentstatus);
    }

    // @Post("order/remain/payment")
    // remainPaymentConfirm(@Body() paymentstatus: any) {
    //     return this.consumerService.remainPaymentConfirm(paymentstatus);
    // }
    // ---------------------------------------------------------------------------------------------------------
    //done
    @Put("profile/edit/:consumerId")
    async editConProfile(@Param("consumerId") consumerId: any, @Body() form: any) {
        return await this.consumerService.editConProfile(consumerId, form);
    }
    // @Post("profile/edit")
    // editProfile(@Body() form: any) {
    //     return this.consumerService.editProfile(form);
    // }
    // ---------------------------------------------------------------------------------------------------------
    //唔知點解加左rating就唔work
    @Post("reaction/feedback/")
    feedback(@Body() reaction: any) {
        let merchantId = 1;
        let consumerId = 1;

        return this.consumerService.feedback(
            reaction.comment,
            reaction.rating,
            merchantId,
            consumerId
        );
    }

    // @Post("reaction/rating/")
    // rating(@Body() reaction: any) {
    //     const merchantId = 1
    //     const consumerId = 1
    //     return this.consumerService.rating(reaction.rating, merchantId, consumerId);
    // }
    // @Post("reaction/rating/")
    // rating(@Body() reaction: any) {
    //     return this.consumerService.rating(reaction.rating, reaction.merchantId);
    // }
}
