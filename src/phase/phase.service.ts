import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePhaseDto, UpdatePhaseDto } from "./dto";

@Injectable()
export class PhaseService {
  constructor(private prisma: PrismaService) {}

  async create(createPhaseDto: CreatePhaseDto) {
    const phaseCheck = await this.prisma.phase.findFirst({
      where: { leagueId: createPhaseDto.leagueId },
      orderBy: { order: "desc" },
    });
    if (!phaseCheck) {
      createPhaseDto.order = 1;
    } else {
      createPhaseDto.order = phaseCheck.order + 1;
    }
    const phase = await this.prisma.phase.create({ data: createPhaseDto });
    return phase;
  }

  async findByLeague(leagueId: string) {
    const phases = await this.prisma.phase.findMany({ where: { leagueId } });
    return phases;
  }

  async findOne(id: string) {
    const phase = await this.prisma.phase.findUnique({ where: { id } });
    return phase;
  }

  async update(id: string, updateKeyDto: UpdatePhaseDto) {
    const phase = await this.prisma.phase.update({
      where: { id },
      data: updateKeyDto,
    });
    return phase;
  }

  async remove(id: string) {
    const phase = await this.prisma.phase.delete({ where: { id } });
    return phase;
  }
}
