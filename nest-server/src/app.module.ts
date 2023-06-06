import { Module } from '@nestjs/common';
import { AdminModule } from './Admin/admin.module';
import { AppModuleConsumer } from './Consumer/consumer.module';
import { MerchantModule } from './Merchant/merchant.module';


@Module({
  imports: [
    AppModuleAdmin,
    AppModuleConsumer,
    AppModuleMerchant,
    AppModulePublic,
  ],
})
export class AppModule {}
