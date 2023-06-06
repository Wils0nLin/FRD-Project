import { Module } from '@nestjs/common';
import { AppControllerMerchant } from 'src/controller/app.controllerMerchant';
import { AppServiceMerchant } from 'src/service/app.serviceMerchant';

@Module({
  imports: [],
  controllers: [AppControllerMerchant],
  providers: [AppServiceMerchant],
})
export class AppModuleMerchant {}
