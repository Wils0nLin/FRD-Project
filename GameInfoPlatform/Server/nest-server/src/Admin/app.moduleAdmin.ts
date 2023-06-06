import { Module } from '@nestjs/common';
import { AppControllerAdmin } from 'src/Admin/app.controllerAdmin';
import { AppServiceAdmin } from 'src/Admin/app.serviceAdmin';
@Module({
  imports: [],
  controllers: [AppControllerAdmin],
  providers: [AppServiceAdmin],
})
export class AppModuleAdmin {}
