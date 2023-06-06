import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppServicePublic } from './public.service';

@Controller('public')
export class AppControllerPublic {
  constructor(private readonly appServicePublic: AppServicePublic) {}

  @Post('register')
  register(@Body() form: any) {
    return this.appServicePublic.register(form);
  }

  @Get()
  login(@Body() userloginInfo: any) {
    return this.appServicePublic.login(userloginInfo);
  }
}
