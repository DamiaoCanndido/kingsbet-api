import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateLeagueDto, UpdateLeagueDto } from "./dto";

@Injectable()
export class LeagueService {
  constructor(private prisma: PrismaService) {}

  async create(createLeagueDto: CreateLeagueDto) {
    const league = await this.prisma.league.create({ data: createLeagueDto });
    return league;
  }

  async findAll() {
    const leagues = await this.prisma.league.findMany();
    return leagues;
  }

  async findOne(id: string) {
    const league = await this.prisma.league.findUnique({ where: { id } });
    return league;
  }

  async update(id: string, updateLeagueDto: UpdateLeagueDto) {
    const league = await this.prisma.league.update({
      where: { id },
      data: updateLeagueDto,
    });
    return league;
  }

  async remove(id: string) {
    const league = await this.prisma.league.delete({
      where: { id },
    });
    return league;
  }
}
