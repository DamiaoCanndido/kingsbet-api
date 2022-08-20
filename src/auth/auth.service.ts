import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SignUpDTO } from "./dto";

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService){}
    
    signup(dto: SignUpDTO){
        return {dto,}
    }

    signin(){
        return {msg:'signin'}
    }
}