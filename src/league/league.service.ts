import { BadRequestException, Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import {
  CreateMatch,
  CreateLeagueDto,
  UpdateLeagueDto,
  CreatePlayer,
} from "./dto";

@Injectable()
export class LeagueService {
  constructor(private prisma: PrismaService) {}

  async create(createLeagueDto: CreateLeagueDto) {
    const league = await this.prisma.league.create({ data: createLeagueDto });
    return league;
  }

  async createMatches(createMatch: CreateMatch) {
    const matches = await this.prisma.match.create({
      data: createMatch,
    });
    return matches;
  }

  async createPlayers(createPlayer: CreatePlayer, user: User) {
    const league = await this.prisma.league.findUnique({
      where: { id: createPlayer.leagueId },
      include: {
        Player: true,
      },
    });
    if (league.Player.length >= league.playersAmount) {
      throw new BadRequestException("Full league");
    }
    if (user.cash < league.subscription) {
      throw new BadRequestException("Insufficient funds");
    } else {
      const cash = user.cash - league.subscription;
      await this.prisma.user.update({ where: { id: user.id }, data: { cash } });
    }
    const player = await this.prisma.player.create({
      data: {
        leagueId: createPlayer.leagueId,
        userId: user.id,
      },
    });
    return player;
  }

  async findAll() {
    const leagues = await this.prisma.league.findMany({
      include: {
        match: {
          select: {
            game: true,
          },
        },
      },
    });
    return leagues;
  }

  async findGamesFromLeague(leagueId: string) {
    const games = await this.prisma.match.findMany({
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
