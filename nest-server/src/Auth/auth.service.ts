import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PublicService } from 'src/Public/public.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private publicService: PublicService,
    private jwtService: JwtService,
  ) {}

  // auth sample:

  // async signIn(username, pass) {
  //   const user = await this.usersService.findOne(username);
  //   if (user?.password !== pass) {
  //     throw new UnauthorizedException();
  //   }
  //   const payload = { sub: user.userId, username: user.username };
  //   return {
  //     access_token: await this.jwtService.signAsync(payload),
  //   };
  // }
}
