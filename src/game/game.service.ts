import { Injectable } from "@nestjs/common";
import { scoreHelper } from "../helpers/score-helper";
import { PrismaService } from "../prisma/prisma.service";
import { CreateGameDto, UpdateGameDto } from "./dto";

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async create(createGameDto: CreateGameDto) {
    const game = await this.prisma.game.create({ data: createGameDto });
    return game;
  }

  async findAll() {
    const games = await this.prisma.game.findMany({
      include: {
        home: true,
        away: true,
      },
    });
    return games;
  }

  async findByLeague(leagueId: string) {
    const games = await this.prisma.game.findMany({
      where: {
        match: {
          some: {
            leagueId,
          },
        },
      },
      include: { home: true, away: true, champ: true },
    });
    return games;
  }

  async findByChamp(champId: string) {
    const games = await this.prisma.game.findMany({
      where: {
        champId,
      },
      include: { home: true, away: true, champ: true },
    });
    return games;
  }

  async findOne(id: string) {
    const game = await this.prisma.game.findUnique({
      where: { id },
      include: { home: {}, away: {} },
    });
    return game;
  }

  async update(id: string, updateGameDto: UpdateGameDto) {
    const game = await this.prisma.game.update({
      where: { id },
      data: updateGameDto,
    });

    const predicts = await this.prisma.predict.findMany({
      where: {
        match: {
          gameId: id,
        },
      },
    });

    predicts.forEach(async (p) => {
      const score = scoreHelper(
        p.homePredict,
        p.awayPredict,
        updateGameDto.homeScore,
        updateGameDto.awayScore,
      );
      await this.prisma.predict.update({
        where: {
          id: p.id,
        },
        data: { score },
      });
    });

    return game;
  }

  async remove(id: string) {
    const game = await this.prisma.game.delete({ where: { id } });
    return game;
  }
}
