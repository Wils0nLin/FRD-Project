import { Module } from '@nestjs/common';
import { AppControllerMerchant } from './app.controllerMerchant';
import { AppServiceMerchant } from './app.serviceMerchant';

@Module({
  imports: [],
  controllers: [AppControllerMerchant],
  providers: [AppServiceMerchant],
})
export class AppModuleMerchant {}
