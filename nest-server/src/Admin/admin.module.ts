import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { PublicService } from "../Public/public.service";
import { PrismaService } from "../prisma.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Module({
    imports: [],
    controllers: [AdminController],
    providers: [AdminService, PublicService, PrismaService, JwtService, ConfigService],
})
export class AdminModule {}
