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
import { LeagueService } from "./league.service";
import { createGamesOnLeagues, CreateLeagueDto, UpdateLeagueDto } from "./dto";
import { AllExceptionsFilter } from "../helpers/http-exception.filter";
import { JwtGuard } from "../auth/guard";
import { CaslAbilityGuard } from "../casl/guard";
import { CheckCaslAbility } from "../casl/decorators";
import { GenericAbilities } from "../casl/decorators/generic-abilities";
import { gamesOnLeaguesEntity, LeagueEntity } from "./entity";

@Controller("league")
@UseFilters(AllExceptionsFilter)
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<LeagueEntity>(new LeagueEntity()).create(),
  )
  @Post()
  create(@Body() createLeagueDto: CreateLeagueDto) {
    return this.leagueService.create(createLeagueDto);
  }

  @Post("game")
  createGamesOnLeagues(@Body() createGamesOnLeagues: createGamesOnLeagues) {
    return this.leagueService.createGamesOnLeagues(createGamesOnLeagues);
  }

  @Get()
  findAll() {
    return this.leagueService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.leagueService.findOne(id);
  }

  @Get(":leagueId/games")
  findGamesFromLeague(@Param("leagueId") leagueId: string) {
    return this.leagueService.findGamesFromLeague(leagueId);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<LeagueEntity>(new LeagueEntity()).update(),
  )
  @Put(":id")
  update(@Param("id") id: string, @Body() updateLeagueDto: UpdateLeagueDto) {
    return this.leagueService.update(id, updateLeagueDto);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<LeagueEntity>(new LeagueEntity()).delete(),
  )
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.leagueService.remove(id);
  }
}
