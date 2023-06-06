import { Module } from '@nestjs/common';
import { AppServiceConsumer } from './consumer.service';
import { AppControllerConsumer } from './consumer.controller';
@Module({
  imports: [],
  controllers: [AppControllerConsumer],
  providers: [AppServiceConsumer],
})
export class AppModuleConsumer {}
