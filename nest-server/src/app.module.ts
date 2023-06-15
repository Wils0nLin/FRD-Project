import { Module } from "@nestjs/common";
import { AdminModule } from "./Admin/admin.module";
import { ConsumerModule } from "./Consumer/consumer.module";
import { MerchantModule } from "./Merchant/merchant.module";
import { PublicModule } from "./Public/public.module";

@Module({
    imports: [AdminModule, ConsumerModule, MerchantModule, PublicModule],
})
export class AppModule {}
