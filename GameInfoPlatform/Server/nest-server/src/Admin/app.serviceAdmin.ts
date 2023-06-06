import { Injectable } from '@nestjs/common';

@Injectable()
export class AppServiceAdmin {
  getHello(): string {
    return 'i am admin';
  }
}
