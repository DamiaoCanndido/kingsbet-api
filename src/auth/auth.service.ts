import { ForbiddenException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SignInDTO, SignUpDTO } from "./dto";
import * as argon from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {

    constructor(
        private prisma: PrismaService, 
        private jwt: JwtService,
        private config: ConfigService,
    ){}
    
    async signup(dto: SignUpDTO){
        const hash = await argon.hash(dto.password);
        if (dto.password !== dto.confirmPassword) {
            throw new HttpException("passwords not matches", HttpStatus.BAD_REQUEST);
        }
        try {
            const user = await this.prisma.user.create({
                data: {
                    name: dto.name,
                    email: dto.email,
                    hash,
                },
            })
            delete user.hash;
            return user;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError){
                if (error.code === 'P2002') {
                    throw new ForbiddenException("User already exists.")
                }
            }
            throw error;
        }
    }

    async signin(dto: SignInDTO){
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        })

        if (!user) {
            throw new ForbiddenException("Invalid credentials");
        }

        const pwMatches = await argon.verify(user.hash, dto.password,);

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
        }

        return this.jwt.signAsync(payload, {
            expiresIn: '15m',
            secret: this.config.get('JWT_SECRET'),
        })
    }
}