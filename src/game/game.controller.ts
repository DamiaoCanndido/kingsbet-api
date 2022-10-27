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
import { GenericAbilities } from "../casl/decorators/generic-abilities";
import { GameEntity } from "./entity";

@Controller("game")
@UseFilters(AllExceptionsFilter)
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new GenericAbilities<GameEntity>(new GameEntity()).create())
  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Get()
  findAll() {
    return this.gameService.findAll();
  }

  @Get(":champId/champ")
  findByChamp(@Param("champId") champId: string) {
    return this.gameService.findByChamp(champId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.gameService.findOne(id);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new GenericAbilities<GameEntity>(new GameEntity()).update())
  @Put(":id")
  update(@Param("id") id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gameService.update(id, updateGameDto);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new GenericAbilities<GameEntity>(new GameEntity()).delete())
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.gameService.remove(id);
  }
}
