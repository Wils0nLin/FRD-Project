import { Controller, Get } from '@nestjs/common';
import { AppServiceMerchant } from 'src/service/app.serviceMerchant';

@Controller('merchant')
export class AppControllerMerchant {
  constructor(private readonly appServiceMerchant: AppServiceMerchant) {}

  @Get()
  getHello(): string {
    return this.appServiceMerchant.getHello();
  }
}
