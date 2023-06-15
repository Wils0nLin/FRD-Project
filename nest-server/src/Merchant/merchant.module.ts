import { Module } from "@nestjs/common";
import { MerchantController } from "./merchant.controller";
import { MerchantService } from "./merchant.service";
import { PublicService } from "src/Public/public.service";
import { PrismaService } from "src/prisma.service";

@Module({
    imports: [],
    controllers: [MerchantController],
    providers: [MerchantService, PublicService, PrismaService],
})
export class MerchantModule {}
