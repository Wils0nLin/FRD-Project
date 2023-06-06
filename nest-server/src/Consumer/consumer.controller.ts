import { Controller, Get } from '@nestjs/common';
import { AppServiceConsumer } from './consumer.service';
@Controller('consumer')
export class AppControllerConsumer {
  constructor(private readonly appServiceConsumer: AppServiceConsumer) {}

  @Get()
  getHello(): string {
    return this.appServiceConsumer.getHello();
  }
}
