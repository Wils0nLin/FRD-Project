import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { PublicService } from 'src/Public/public.service';

@Controller('merchant')
export class MerchantController {
  constructor(
    private readonly merchantService: MerchantService,
    private readonly publicService: PublicService,
  ) {}

  @Post('edit')
  editProfile(@Body() form: any) {
    return this.merchantService.editProfile(form);
  }
  @Post('upload')
  upLoadItems(@Body() form: any) {
    return this.merchantService.upLoadItems(form);
  }
  @Post('update')
  updateItems(@Body() form: any) {
    return this.merchantService.updateItems(form);
  }
  @Post('changeStatus')
  changeItemStatus(@Body() form: any) {
    console.log(
      `change item status to 3 possible status "receiving pre-order","end of pre-order","in-stock",if start pre-order update period of time `,
    );
    return this.merchantService.changeItemStatus(form);
  }
  @Get('scanner/:userId')
  pairUserId(@Param() parms: any) {
    console.log(
      `scanning the consumer qr code will get the item by merchant id and consumer id `,
    );
    return this.merchantService.pairUserId(parms.userId);
  }
  @Post('Result')
  paymentConfirm(@Body() resultStatus: any) {
    console.log('get payment result by stripe any display success or not');
    return this.merchantService.paymentConfirm(resultStatus);
  }
}
