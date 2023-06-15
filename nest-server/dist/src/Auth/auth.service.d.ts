import { PublicService } from 'src/Public/public.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private publicService;
    private jwtService;
    constructor(publicService: PublicService, jwtService: JwtService);
}
