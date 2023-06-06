import { Module } from '@nestjs/common';
import { AppControllerMerchant } from './merchant.controller';
import { AppServiceMerchant } from './merchant.service';

@Module({
  imports: [],
  controllers: [AppControllerMerchant],
  providers: [AppServiceMerchant],
})
export class AppModuleMerchant {}
