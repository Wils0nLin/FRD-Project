import { Module } from "@nestjs/common";
import { ConsumerController } from "./consumer.controller";
import { ConsumerService } from "./consumer.service";
import { PublicService } from "../Public/public.service";
import { PrismaService } from "src/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Module({
    imports: [],
    controllers: [ConsumerController],
    providers: [ConsumerService, PublicService, PrismaService, JwtService, ConfigService],
})
export class ConsumerModule {}
