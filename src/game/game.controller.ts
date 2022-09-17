import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { GameService } from "./game.service";
import { CreateGameDto, UpdateGameDto } from "./dto";

@Controller("game")
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Get(":roundId")
  findByRound(@Param("roundId") roundId: string) {
    return this.gameService.findByRound(roundId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.gameService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gameService.update(id, updateGameDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.gameService.remove(id);
  }
}
