import { Controller, Get } from '@nestjs/common';
import { AppServiceAdmin } from 'src/service/app.serviceAdmin';

@Controller('admin')
export class AppControllerAdmin {
  constructor(private readonly appServiceAdmin: AppServiceAdmin) {}

  @Get()
  getHello(): string {
    return this.appServiceAdmin.getHello();
  }
}
