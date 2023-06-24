import { Module } from "@nestjs/common";
import { AdminModule } from "./Admin/admin.module";
import { ConsumerModule } from "./Consumer/consumer.module";
import { MerchantModule } from "./Merchant/merchant.module";
import { PublicModule } from "./Public/public.module";
import { StripeModule } from './stripe/stripe.module';
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [ConfigModule.forRoot({
        isGlobal:true
    }),AdminModule, ConsumerModule, MerchantModule, PublicModule, StripeModule],
})
export class AppModule {}
