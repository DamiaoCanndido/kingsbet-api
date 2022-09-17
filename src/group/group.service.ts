import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateGroupDto, UpdateGroupDto } from "./dto/group.dto";

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async create(createGroupDto: CreateGroupDto) {
    const groupCheck = await this.prisma.group.findFirst({
      where: { champId: createGroupDto.champId },
      orderBy: { order: "desc" },
    });
    if (!groupCheck) {
      createGroupDto.order = 1;
    } else {
      createGroupDto.order = groupCheck.order + 1;
    }
    const group = await this.prisma.group.create({ data: createGroupDto });
    return group;
  }

  async findByChamp(champId: string) {
    const groups = await this.prisma.group.findMany({ where: { champId } });
    return groups;
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
