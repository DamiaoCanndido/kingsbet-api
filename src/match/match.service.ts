import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateMatchDto, UpdateMatchDto } from "./dto";

@Injectable()
export class MatchService {
  constructor(private prisma: PrismaService) {}

  async create(createMatchDto: CreateMatchDto) {
    const match = await this.prisma.match.create({ data: createMatchDto });
    return match;
  }

  async findByPhase(phaseId: string) {
    const matches = await this.prisma.match.findMany({ where: { phaseId } });
    return matches;
  }

  async findOne(id: string) {
    const match = await this.prisma.match.findUnique({ where: { id } });
    return match;
  }

  async update(id: string, updateMatchDto: UpdateMatchDto) {
    const match = await this.prisma.match.update({
      where: { id },
      data: updateMatchDto,
    });
    return match;
  }

  async remove(id: string) {
    const match = await this.prisma.match.delete({ where: { id } });
    return match;
  }
}
