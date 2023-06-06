import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublicService } from './public.service';

@Controller('public')
export class PublicController {
  constructor(private readonly publicService: PublicService) {}

  @Post('register')
  register(@Body() form: any) {
    return this.publicService.register(form);
  }

  @Get()
  login(@Body() userloginInfo: any) {
    return this.publicService.login(userloginInfo);
  }
}
