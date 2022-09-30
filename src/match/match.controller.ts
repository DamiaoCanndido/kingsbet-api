import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  UseGuards,
} from "@nestjs/common";
import { MatchService } from "./match.service";
import { CreateMatchDto, UpdateMatchDto } from "./dto";
import { AllExceptionsFilter } from "../helpers/http-exception.filter";
import { JwtGuard } from "../auth/guard";
import { CaslAbilityGuard } from "../casl/guard";
import { CheckCaslAbility } from "../casl/decorators";
import { GenericAbilities } from "../casl/decorators/generic-abilities";
import { MatchEntity } from "./entity";

@Controller("match")
@UseFilters(AllExceptionsFilter)
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<MatchEntity>(new MatchEntity()).create(),
  )
  @Post()
  create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchService.create(createMatchDto);
  }

  @Get(":phaseId/phase")
  findByPhase(@Param("phaseId") phaseId: string) {
    return this.matchService.findByPhase(phaseId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.matchService.findOne(id);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<MatchEntity>(new MatchEntity()).update(),
  )
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateMatchDto: UpdateMatchDto) {
    return this.matchService.update(id, updateMatchDto);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<MatchEntity>(new MatchEntity()).delete(),
  )
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.matchService.remove(id);
  }
}
