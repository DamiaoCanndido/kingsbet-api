import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { editNameDTO } from "src/auth/dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UserService {

    constructor(
        private prisma: PrismaService
    ){}

    async editNameUser(user: User, dto: editNameDTO) {
        try {
            const editUser = await this.prisma.user.update({
                where: {id: user.id}, 
                data: {name: dto.name},
            })
            delete editUser.hash;
            return editUser;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError){
                if (error.code === 'P2002') {
                    throw new ForbiddenException("Not possible to edit")
                }
            }
            throw new NotFoundException();
        }
    }
}