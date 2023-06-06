import { Module } from '@nestjs/common';
import { AppModuleAdmin } from './Admin/app.moduleAdmin';
import { AppModuleConsumer } from './Consumer/app.moduleConsumer';
import { AppModuleMerchant } from './Merchant/app.moduleMerchant';
import { AppModulePublic } from './Public/app.modulePublic';

@Module({
  imports: [
    AppModuleAdmin,
    AppModuleConsumer,
    AppModuleMerchant,
    AppModulePublic,
  ],
})
export class AppModule {}
