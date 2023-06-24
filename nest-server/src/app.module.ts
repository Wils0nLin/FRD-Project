import { Module } from "@nestjs/common";
import { AdminModule } from "./Admin/admin.module";
import { ConsumerModule } from "./Consumer/consumer.module";
import { MerchantModule } from "./Merchant/merchant.module";
import { PublicModule } from "./Public/public.module";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, envFilePath: [".env"] }),
        AdminModule,
        ConsumerModule,
        MerchantModule,
        PublicModule,
    ],
})
export class AppModule {}
