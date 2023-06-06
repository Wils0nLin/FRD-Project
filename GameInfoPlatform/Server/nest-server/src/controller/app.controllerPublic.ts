import { Controller, Get } from '@nestjs/common';
import { AppServicePublic } from 'src/service/app.servicePublic';

@Controller('public')
export class AppControllerPublic {
  constructor(private readonly appServicePublic: AppServicePublic) {}

  @Get()
  getHello(): string {
    return this.appServicePublic.getHello();
  }
}
