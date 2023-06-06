import { Controller, Get } from '@nestjs/common';
import { AppServiceConsumer } from 'src/service/app.serviceConsumer';
@Controller('consumer')
export class AppControllerConsumer {
  constructor(private readonly appServiceConsumer: AppServiceConsumer) {}

  @Get()
  getHello(): string {
    return this.appServiceConsumer.getHello();
  }
}
