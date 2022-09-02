import { ForbiddenException, Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { editAdminStatusDTO, editNameDTO } from "./dto";
import { PrismaService } from "../prisma/prisma.service";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class UserService {

    constructor(
        private prisma: PrismaService,
        private config: ConfigService,
    ){}

    async editNameUser(user: User, dto: editNameDTO) {
        const editUser = await this.prisma.user.update({
            where: {id: user.id}, 
            data: {name: dto.name},
        })
        delete editUser.hash;
        return editUser; 
    }

    // For developer
    async editAdminStatus(user: User, dto: editAdminStatusDTO) {
        if (dto.serverCode != this.config.get("SERVER_CODE")) {
            throw new ForbiddenException("You arent developer");
        }
        await this.prisma.user.update({
            where: {id: user.id},
            data: {isAdmin: !user.isAdmin}
        })
        return {message: `You role is changed for ${!user.isAdmin}`}
    }
}