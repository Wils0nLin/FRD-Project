import { Module } from "@nestjs/common";
import { MerchantController } from "./merchant.controller";
import { MerchantService } from "./merchant.service";
import { PublicService } from "src/Public/public.service";
import { PrismaService } from "src/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Module({
    imports: [],
    controllers: [MerchantController],
    providers: [MerchantService, PublicService, PrismaService, JwtService, ConfigService],
})
export class MerchantModule {}
