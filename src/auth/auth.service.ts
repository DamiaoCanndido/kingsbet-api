import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from "@nestjs/common";
import { SignInDTO, SignUpDTO } from "./dto";
import * as argon from "argon2";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: SignUpDTO) {
    const hash = await argon.hash(dto.password);
    if (dto.password !== dto.confirmPassword) {
      throw new HttpException("passwords not matches", HttpStatus.BAD_REQUEST);
    }

    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        hash,
      },
    });
    delete user.hash;
    return user;
  }

  async signin(dto: SignInDTO) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new ForbiddenException("Invalid credentials");
    }

    const pwMatches = await argon.verify(user.hash, dto.password);

    if (!pwMatches) {
      throw new ForbiddenException("Invalid credentials");
    }

    const accessToken = await this.signToken(user.id);

    return {
      name: user.name,
      email: user.email,
      access_token: accessToken,
    };
  }

  async signToken(userId: string): Promise<string> {
    const payload = {
      sub: userId,
    };

    return this.jwt.signAsync(payload, {
      expiresIn: "120m",
      secret: this.config.get("JWT_SECRET"),
    });
  }
}
