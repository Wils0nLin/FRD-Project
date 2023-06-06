import { Module } from '@nestjs/common';
import { AppServiceConsumer } from './app.serviceConsumer';
import { AppControllerConsumer } from './app.controllerConsumer';
@Module({
  imports: [],
  controllers: [AppControllerConsumer],
  providers: [AppServiceConsumer],
})
export class AppModuleConsumer {}
