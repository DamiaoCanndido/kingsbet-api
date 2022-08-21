import { ForbiddenException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SignInDTO, SignUpDTO } from "./dto";
import * as argon from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService){}
    
    async signup(dto: SignUpDTO){
        const hash = await argon.hash(dto.password);
        try {
            const user = await this.prisma.user.create({
                data: {
                    name: dto.name,
                    email: dto.email,
                    hash,
                },
            })
            delete user.hash;
            if (dto.password !== dto.confirmPassword) {
                throw new HttpException("passwords not matches", HttpStatus.BAD_REQUEST);
            }
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
        delete user.hash;
        return user;
    }
}