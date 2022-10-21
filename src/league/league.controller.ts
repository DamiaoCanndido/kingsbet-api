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
  Req,
} from "@nestjs/common";
import { User } from "@prisma/client";
import { LeagueService } from "./league.service";
import {
  CreateMatchDto,
  CreateLeagueDto,
  UpdateLeagueDto,
  CreatePlayerDto,
  CreatePredictDto,
} from "./dto";
import { AllExceptionsFilter } from "../helpers/http-exception.filter";
import { JwtGuard } from "../auth/guard";
import { CaslAbilityGuard } from "../casl/guard";
import { CheckCaslAbility } from "../casl/decorators";
import { GenericAbilities } from "../casl/decorators/generic-abilities";
import { MatchEntity, LeagueEntity } from "./entity";
import { GetUser } from "../auth/decorators";

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

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<MatchEntity>(new MatchEntity()).create(),
  )
  @Post(":leagueId/match")
  createMatches(
    @Param("leagueId") leagueId: string,
    @Body() createMatchDto: CreateMatchDto,
  ) {
    return this.leagueService.createMatches(leagueId, createMatchDto);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @Post(":leagueId/player")
  createPlayer(@Param("leagueId") leagueId: string, @GetUser() user: User) {
    return this.leagueService.createPlayers(leagueId, user);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @Post(":leagueId/predict")
  createPredict(
    @Param("leagueId") leagueId: string,
    @Body() createPredictDto: CreatePredictDto,
    @GetUser() user: User,
  ) {
    return this.leagueService.createPredict(leagueId, createPredictDto, user);
  }

  @Get(":leagueId/table")
  getTableByLeague(@Param("leagueId") leagueId: string) {
    return this.leagueService.getTableByLeague(leagueId);
  }

  @UseGuards(JwtGuard)
  @Get(":leagueId/game/:gameId")
  getPredictsByMatch(
    @Param("leagueId") leagueId: string,
    @Param("gameId") gameId: string,
  ) {
    return this.leagueService.getPredictsByMatch(leagueId, gameId);
  }

  @Get()
  findAll() {
    return this.leagueService.findAll();
  }

  @Get("now")
  findLeaguesAvailable() {
    return this.leagueService.findLeaguesAvailable();
  }

  @UseGuards(JwtGuard)
  @Get("me")
  findMyLeagues(@GetUser() user: User) {
    return this.leagueService.findMyLeagues(user);
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
