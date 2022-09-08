import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateGroupDto, UpdateGroupDto } from "./dto/create-group.dto";

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async create(createGroupDto: CreateGroupDto) {
    const group = await this.prisma.group.create({ data: createGroupDto });
    return group;
  }

  async findByChamp(champId: string) {
    const groups = await this.prisma.group.findMany({ where: { champId } });
    return groups;
  }

  async findOne(id: string) {
    const group = await this.prisma.group.findUnique({ where: { id } });
    return group;
  }

  async update(id: string, updateGroupDto: UpdateGroupDto) {
    const group = await this.prisma.group.update({
      where: { id },
      data: updateGroupDto,
    });
    return group;
  }

  async remove(id: string) {
    const group = await this.prisma.group.delete({ where: { id } });
    return group;
  }
}
