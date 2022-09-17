import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateRoundDto, UpdateRoundDto } from "./dto";

@Injectable()
export class RoundService {
  constructor(private prisma: PrismaService) {}

  async create(createRoundDto: CreateRoundDto) {
    const roundCheck = await this.prisma.round.findFirst({
      where: { groupId: createRoundDto.groupId },
      orderBy: { order: "desc" },
    });
    if (!roundCheck) {
      createRoundDto.order = 1;
    } else {
      createRoundDto.order = roundCheck.order + 1;
    }
    const round = await this.prisma.round.create({ data: createRoundDto });
    return round;
  }

  async findByGroup(groupId: string) {
    const rounds = await this.prisma.round.findMany({ where: { groupId } });
    return rounds;
  }

  async update(id: string, updateRoundDto: UpdateRoundDto) {
    const group = await this.prisma.round.update({
      where: { id },
      data: updateRoundDto,
    });
    return group;
  }

  async remove(id: string) {
    const round = await this.prisma.round.delete({ where: { id } });
    return round;
  }
}
