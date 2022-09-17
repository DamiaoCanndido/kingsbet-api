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
import { RoundAbility } from "../casl/decorators/round-abilities/round-abilities";

@Controller("round")
@UseFilters(AllExceptionsFilter)
export class RoundController {
  constructor(private readonly roundService: RoundService) {}

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new RoundAbility().createRound())
  @Post()
  create(@Body() createRoundDto: CreateRoundDto) {
    return this.roundService.create(createRoundDto);
  }

  @Get(":champId")
  findByChamp(@Param("champId") champId: string) {
    return this.roundService.findByChamp(champId);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new RoundAbility().updateRound())
  @Put(":id")
  update(@Param("id") id: string, @Body() updateRoundDto: UpdateRoundDto) {
    return this.roundService.update(id, updateRoundDto);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new RoundAbility().deleteRound())
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.roundService.remove(id);
  }
}
