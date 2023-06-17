import { PrismaService } from 'src/prisma.service';
import { LoginDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    private readonly config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    signToken(userId: number): Promise<{
        access_token: string;
    }>;
}
