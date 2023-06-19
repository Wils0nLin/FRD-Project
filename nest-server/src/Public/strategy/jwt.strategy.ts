import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
    constructor(config: ConfigService, private prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get("JWT_SECRET"),
        });
    }

    async validate(payload: { signId: number; signIdentity: string }) {
        const user: any = await this.prisma.users.findFirst({
            where: { id: payload.signId, identity: payload.signIdentity },
        });
        delete user.password;
        return user;
    }
}
