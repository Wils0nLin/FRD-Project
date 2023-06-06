import { Controller, Get } from '@nestjs/common';
import { AppServiceAdmin } from 'src/Admin/admin.service';

@Controller('admin')
export class AppControllerAuth {
  constructor(private readonly appServiceAdmin: AppServiceAdmin) {}

  @Get()
  getHello(): string {
    return this.appServiceAdmin.getHello();
  }
}
