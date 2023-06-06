import { Injectable } from '@nestjs/common';

@Injectable()
export class AppServiceMerchant {
  getHello(): string {
    return 'i am merchant';
  }
}
