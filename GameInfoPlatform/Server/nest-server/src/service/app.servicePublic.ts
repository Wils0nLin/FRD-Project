import { Injectable } from '@nestjs/common';

@Injectable()
export class AppServicePublic {
  getHello(): string {
    return 'i am public';
  }
}
