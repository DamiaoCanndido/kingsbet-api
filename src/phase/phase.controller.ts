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
import { PhaseService } from "./phase.service";
import { CreatePhaseDto, UpdatePhaseDto } from "./dto";
import { AllExceptionsFilter } from "../helpers/http-exception.filter";
import { GenericAbilities } from "../casl/decorators/generic-abilities";
import { PhaseEntity } from "./entity";
import { JwtGuard } from "../auth/guard";
import { CaslAbilityGuard } from "../casl/guard";
import { CheckCaslAbility } from "../casl/decorators";

@Controller("phase")
@UseFilters(AllExceptionsFilter)
export class PhaseController {
  constructor(private readonly phaseService: PhaseService) {}

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<PhaseEntity>(new PhaseEntity()).create(),
  )
  @Post()
  create(@Body() createKeyDto: CreatePhaseDto) {
    return this.phaseService.create(createKeyDto);
  }

  @Get(":leagueId/league")
  findByLeague(@Param("leagueId") leagueId: string) {
    return this.phaseService.findByLeague(leagueId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.phaseService.findOne(id);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<PhaseEntity>(new PhaseEntity()).update(),
  )
  @Put(":id")
  update(@Param("id") id: string, @Body() updatePhaseDto: UpdatePhaseDto) {
    return this.phaseService.update(id, updatePhaseDto);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<PhaseEntity>(new PhaseEntity()).delete(),
  )
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.phaseService.remove(id);
  }
}
