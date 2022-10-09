import { Injectable } from "@nestjs/common";
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
    const games = await this.prisma.game.findMany();
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
    return game;
  }

  async remove(id: string) {
    const game = await this.prisma.game.delete({ where: { id } });
    return game;
  }
}
