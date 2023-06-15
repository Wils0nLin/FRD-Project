import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { PublicService } from "../Public/public.service";
import { PrismaService } from "../prisma.service";

@Module({
    imports: [],
    controllers: [AdminController],
    providers: [AdminService, PublicService, PrismaService],
})
export class AdminModule {}
