import { Module } from '@nestjs/common';
import { AppControllerPublic } from './public.controller';
import { AppServicePublic } from './public.service';
@Module({
  imports: [],
  controllers: [AppControllerPublic],
  providers: [AppServicePublic],
})
export class AppModulePublic {}
