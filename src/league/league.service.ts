import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { createGamesOnLeagues, CreateLeagueDto, UpdateLeagueDto } from "./dto";

@Injectable()
export class LeagueService {
  constructor(private prisma: PrismaService) {}

  async create(createLeagueDto: CreateLeagueDto) {
    const league = await this.prisma.league.create({ data: createLeagueDto });
    return league;
  }

  async createGamesOnLeagues(createGamesOnLeagues: createGamesOnLeagues) {
    const gamesOnLeagues = await this.prisma.gamesOnLeagues.create({
      data: {
        game: {
          connect: {
            id: createGamesOnLeagues.gameId,
          },
        },
        league: {
          connect: {
            id: createGamesOnLeagues.leagueId,
          },
        },
      },
    });
    return gamesOnLeagues;
  }

  async findAll() {
    const leagues = await this.prisma.league.findMany({
      include: {
        gamesOnLeagues: {
          select: {
            game: true,
          },
        },
      },
    });
    return leagues;
  }

  async findGamesFromLeague(leagueId: string) {
    const games = await this.prisma.gamesOnLeagues.findMany({
      where: { leagueId },
      select: { game: true },
    });
    return games;
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
