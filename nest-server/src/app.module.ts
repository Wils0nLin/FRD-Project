import { Module } from '@nestjs/common';
import { AppModuleAdmin } from './Admin/admin.module';
import { AppModuleConsumer } from './Consumer/consumer.module';
import { AppModuleMerchant } from './Merchant/merchant.module';
import { AppModulePublic } from './Public/public.module';

@Module({
  imports: [
    AppModuleAdmin,
    AppModuleConsumer,
    AppModuleMerchant,
    AppModulePublic,
  ],
})
export class AppModule {}
