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

  async findByRound(roundId: string) {
    const games = await this.prisma.game.findMany({ where: { roundId } });
    return games;
  }

  async findOne(id: string) {
    const game = await this.prisma.game.findUnique({ where: { id } });
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
