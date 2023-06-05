import { Module } from '@nestjs/common';
import { AppControllerConsumer } from 'src/controller/app.controllerConsumer';
import { AppServiceConsumer } from 'src/service/app.serviceConsumer';
@Module({
  imports: [],
  controllers: [AppControllerConsumer],
  providers: [AppServiceConsumer],
})
export class AppModuleConsumer {}
