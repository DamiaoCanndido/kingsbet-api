import { BadRequestException, Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import {
  CreateMatchDto,
  CreateLeagueDto,
  UpdateLeagueDto,
  CreatePredictDto,
} from "./dto";

@Injectable()
export class LeagueService {
  constructor(private prisma: PrismaService) {}

  async create(createLeagueDto: CreateLeagueDto) {
    const league = await this.prisma.league.create({ data: createLeagueDto });
    return league;
  }

  async createMatches(leagueId: string, createMatchDto: CreateMatchDto) {
    const league = await this.prisma.league.findUnique({
      where: { id: leagueId },
      include: {
        match: true,
      },
    });
    if (league.match.length >= league.matchesAmount) {
      throw new BadRequestException("Full league matches");
    }
    const matches = await this.prisma.match.create({
      data: {
        gameId: createMatchDto.gameId,
        leagueId,
      },
    });
    return matches;
  }

  async createPlayers(leagueId: string, user: User) {
    const league = await this.prisma.league.findUnique({
      where: { id: leagueId },
      include: {
        Player: true,
      },
    });
    if (league.Player.length >= league.playersAmount) {
      throw new BadRequestException("Full league players");
    }
    if (user.cash < league.subscription) {
      throw new BadRequestException("Insufficient funds");
    } else {
      const cash = user.cash - league.subscription;
      await this.prisma.user.update({ where: { id: user.id }, data: { cash } });
    }
    const player = await this.prisma.player.create({
      data: {
        leagueId,
        userId: user.id,
      },
    });
    return player;
  }

  async createPredict(
    leagueId: string,
    createPredictDto: CreatePredictDto,
    user: User,
  ) {
    const match = await this.prisma.match.findUnique({
      where: {
        gameId_leagueId: { gameId: createPredictDto.gameId, leagueId },
      },
      include: {
        game: true,
      },
    });

    const player = await this.prisma.player.findUnique({
      where: {
        leagueId_userId: { leagueId, userId: user.id },
      },
    });

    if (!player) {
      throw new BadRequestException("You are not registered in the league");
    }

    if (Date.now() - 10800000 > match.game.start.getTime()) {
      throw new BadRequestException("Game already started");
    }

    const predict = await this.prisma.predict.create({
      data: {
        matchId: match.id,
        playerId: player.id,
        homePredict: createPredictDto.homePredict,
        awayPredict: createPredictDto.awayPredict,
        leagueId,
      },
    });

    return predict;
  }

  async getPredictsByMatch(matchId: string) {
    await this.prisma.predict.findMany({
      where: {
        matchId,
      },
    });
  }

  async findAll() {
    const leagues = await this.prisma.league.findMany({
      where: {
        isPrivate: false,
      },
      include: {
        match: {
          select: {
            game: true,
          },
        },
        Player: true,
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
