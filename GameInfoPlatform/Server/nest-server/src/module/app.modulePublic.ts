import { Module } from '@nestjs/common';
import { AppControllerPublic } from 'src/controller/app.controllerPublic';
import { AppServicePublic } from 'src/service/app.servicePublic';
@Module({
  imports: [],
  controllers: [AppControllerPublic],
  providers: [AppServicePublic],
})
export class AppModulePublic {}
