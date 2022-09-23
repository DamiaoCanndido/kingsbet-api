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
import { KeyService } from "./key.service";
import { CreateKeyDto, UpdateKeyDto } from "./dto";
import { AllExceptionsFilter } from "../helpers/http-exception.filter";
import { GenericAbilities } from "../casl/decorators/generic-abilities";
import { KeyEntity } from "./entity";
import { JwtGuard } from "../auth/guard";
import { CaslAbilityGuard } from "../casl/guard";
import { CheckCaslAbility } from "../casl/decorators";

@Controller("key")
@UseFilters(AllExceptionsFilter)
export class KeyController {
  constructor(private readonly keyService: KeyService) {}

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new GenericAbilities<KeyEntity>(new KeyEntity()).create())
  @Post()
  create(@Body() createKeyDto: CreateKeyDto) {
    return this.keyService.create(createKeyDto);
  }

  @Get(":leagueId/league")
  findByLeague(@Param("leagueId") leagueId: string) {
    return this.keyService.findByLeague(leagueId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.keyService.findOne(id);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new GenericAbilities<KeyEntity>(new KeyEntity()).update())
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateKeyDto: UpdateKeyDto) {
    return this.keyService.update(id, updateKeyDto);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new GenericAbilities<KeyEntity>(new KeyEntity()).delete())
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.keyService.remove(id);
  }
}
