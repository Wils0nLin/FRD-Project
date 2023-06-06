import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('admin')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
