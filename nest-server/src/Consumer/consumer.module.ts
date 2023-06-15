import { Module } from "@nestjs/common";
import { ConsumerController } from "./consumer.controller";
import { ConsumerService } from "./consumer.service";
import { PublicService } from "../Public/public.service";
import { PrismaService } from "src/prisma.service";

@Module({
    imports: [],
    controllers: [ConsumerController],
    providers: [ConsumerService, PublicService, PrismaService],
})
export class ConsumerModule {}
