import { Module } from '@nestjs/common';
import { AppControllerAuth } from './auth.controller';
import { AppServiceAuth } from './auth.service';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { AppModulePublic } from 'src/Public/public.module';

@Module({
  imports: [
    AppModulePublic,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AppServiceAuth],
  controllers: [AppControllerAuth],
  exports: [AppServiceAuth],
})
export class AppModuleAuth {}
