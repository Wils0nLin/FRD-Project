import { Module } from '@nestjs/common';
import { AppControllerAdmin } from 'src/Admin/admin.controller';
import { AppServiceAdmin } from 'src/Admin/admin.service';
@Module({
  imports: [],
  controllers: [AppControllerAdmin],
  providers: [AppServiceAdmin],
})
export class AppModuleAdmin {}
