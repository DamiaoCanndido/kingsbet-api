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
import { RoundService } from "./round.service";
import { CreateRoundDto, UpdateRoundDto } from "./dto";
import { AllExceptionsFilter } from "../helpers/http-exception.filter";
import { JwtGuard } from "../auth/guard";
import { CaslAbilityGuard } from "../casl/guard";
import { CheckCaslAbility } from "../casl/decorators";
import { RoundEntity } from "./entity";
import { GenericAbilities } from "../casl/decorators/generic-abilities";

@Controller("round")
@UseFilters(AllExceptionsFilter)
export class RoundController {
  constructor(private readonly roundService: RoundService) {}

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<RoundEntity>(new RoundEntity()).create(),
  )
  @Post()
  create(@Body() createRoundDto: CreateRoundDto) {
    return this.roundService.create(createRoundDto);
  }

  @Get(":groupId")
  findByChamp(@Param("groupId") groupId: string) {
    return this.roundService.findByGroup(groupId);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<RoundEntity>(new RoundEntity()).update(),
  )
  @Put(":id")
  update(@Param("id") id: string, @Body() updateRoundDto: UpdateRoundDto) {
    return this.roundService.update(id, updateRoundDto);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<RoundEntity>(new RoundEntity()).delete(),
  )
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.roundService.remove(id);
  }
}
