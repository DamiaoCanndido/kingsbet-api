import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseFilters,
  UseGuards,
} from "@nestjs/common";
import { GameService } from "./game.service";
import { CreateGameDto, UpdateGameDto } from "./dto";
import { AllExceptionsFilter } from "../helpers/http-exception.filter";
import { JwtGuard } from "../auth/guard";
import { CaslAbilityGuard } from "../casl/guard";
import { CheckCaslAbility } from "../casl/decorators";
import { GameAbility } from "../casl/decorators/game-abilities/game-abilities";

@Controller("game")
@UseFilters(AllExceptionsFilter)
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new GameAbility().createGame())
  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Get(":roundId/round")
  findByRound(@Param("roundId") roundId: string) {
    return this.gameService.findByRound(roundId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.gameService.findOne(id);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new GameAbility().updateGame())
  @Put(":id")
  update(@Param("id") id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gameService.update(id, updateGameDto);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new GameAbility().deleteGame())
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.gameService.remove(id);
  }
}
