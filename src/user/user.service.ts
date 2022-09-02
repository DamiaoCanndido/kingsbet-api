import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { editNameDTO } from "src/auth/dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UserService {

    constructor(
        private prisma: PrismaService
    ){}

    async editNameUser(user: User, dto: editNameDTO) {
        const editUser = await this.prisma.user.update({
            where: {id: user.id}, 
            data: {name: dto.name},
        })
        delete editUser.hash;
        return editUser; 
    }
}