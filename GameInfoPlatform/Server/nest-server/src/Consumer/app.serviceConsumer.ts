import { Injectable } from '@nestjs/common';

@Injectable()
export class AppServiceConsumer {
  getHello(): string {
    return 'i am consumer';
  }
}
