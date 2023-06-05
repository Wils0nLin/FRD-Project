import { Module } from '@nestjs/common';
import { AppControllerAdmin } from 'src/controller/app.controllerAdmin';
import { AppServiceAdmin } from 'src/service/app.serviceAdmin';
@Module({
  imports: [],
  controllers: [AppControllerAdmin],
  providers: [AppServiceAdmin],
})
export class AppModuleAdmin {}
