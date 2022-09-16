import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateRoundDto, UpdateRoundDto } from "./dto";

@Injectable()
export class RoundService {
  constructor(private prisma: PrismaService) {}

  async create(createRoundDto: CreateRoundDto) {
    const round = await this.prisma.round.create({ data: createRoundDto });
    return round;
  }

  async findByChamp(champId: string) {
    const rounds = await this.prisma.round.findMany({ where: { champId } });
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
