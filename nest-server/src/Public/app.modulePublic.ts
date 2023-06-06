import { Module } from '@nestjs/common';
import { AppControllerPublic } from './app.controllerPublic';
import { AppServicePublic } from './app.servicePublic';
@Module({
  imports: [],
  controllers: [AppControllerPublic],
  providers: [AppServicePublic],
})
export class AppModulePublic {}
