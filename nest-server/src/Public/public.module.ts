import { Module } from "@nestjs/common";
import { PublicController } from "./public.controller";
import { PublicService } from "./public.service";
import { PrismaService } from "../prisma.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
@Module({
    imports: [],
    controllers: [PublicController],
    providers: [PublicService, PrismaService, JwtService, ConfigService],
})
export class PublicModule {}
