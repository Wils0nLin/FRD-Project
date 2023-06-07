import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { PublicService } from 'src/Public/public.service';
@Controller('consumer')
export class ConsumerController {
  constructor(
    private readonly consumerService: ConsumerService,
    private readonly publicService: PublicService,
  ) {}
  @Get('qrcode')
  getQrCodeId(@Body() JWTpayload: any) {
    return this.consumerService.getQrCodeId(JWTpayload);
  }
  @Get('wishlist')
  displayWishList() {
    return this.consumerService.displayWishList();
  }

  @Post('wishlist/upload/')
  uploadWishList(@Body() parm: any) {
    return this.consumerService.uploadWishList(parm.id);
  }
  @Post('wishlist/update/')
  updateWishList(@Body() parm: any) {
    return this.consumerService.updateWishList(parm.id);
  }
  @Get('order')
  displayOrder(@Body() JWTpayload: any) {
    return this.publicService.displayOrder(JWTpayload);
  }
  @Get('order/history')
  displayOrderHistory(@Body() JWTpayload: any) {
    return this.publicService.displayOrderHistory(JWTpayload);
  }
  @Post('order/create/')
  createOrder(@Body() param: any) {
    return this.consumerService.creatOrder(param.itemId);
  }
  @Post('order/pre/payment')
  prePaymentConfirm(@Body() paymentstatus: any) {
    return this.consumerService.prePaymentConfirm(paymentstatus);
  }
  @Post('order/remain/payment')
  remainPaymentConfirm(@Body() paymentstatus: any) {
    return this.consumerService.remainPaymentConfirm(paymentstatus);
  }
  @Post('profile/edit')
  editProfile(@Body() form: any) {
    return this.consumerService.editProfile(form);
  }
  @Post('reaction/feedback/')
  feedback(@Body() reaction: any) {
    return this.consumerService.feedback(
      reaction.feedback,
      reaction.merchantId,
    );
  }
  @Post('reaction/rating/')
  rating(@Body() reaction: any) {
    return this.consumerService.feedback(reaction.rating, reaction.merchantId);
  }
}
