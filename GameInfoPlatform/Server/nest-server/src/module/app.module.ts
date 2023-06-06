import { Module } from '@nestjs/common';
import { AppModuleAdmin } from './app.moduleAdmin';
import { AppModuleConsumer } from './app.moduleConsumer';
import { AppModuleMerchant } from './app.moduleMerchant';
import { AppModulePublic } from './app.modulePublic';

@Module({
  imports: [
    AppModuleAdmin,
    AppModuleConsumer,
    AppModuleMerchant,
    AppModulePublic,
  ],
})
export class AppModule {}
