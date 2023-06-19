import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AdminService } from "src/Admin/admin.service";
import { PublicService } from "src/Public/public.service";

@Controller("admin")
export class AdminController {
    constructor(
        private readonly adminService: AdminService,
        private readonly publicService: PublicService,
    ) {}

    @Post("uploadProduct")
    upLoadProduct(@Body() form: any) {
        return this.adminService.upLoadProduct(form);
    }
    @Get("merchantRegistration")
    merchantReg() {
        return this.adminService.merchantReg();
    }
    @Post("merchant/:merchantId")
    merchantConfirm(@Param() Param: any) {
        return this.adminService.merchantConfirm(Param.merchantId);
    }
}
