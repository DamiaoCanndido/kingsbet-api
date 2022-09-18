import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseFilters,
  UseInterceptors,
  UploadedFile,
  Put,
  UseGuards,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ValidateTeamShield } from "../helpers/validate-file";
import { AllExceptionsFilter } from "../helpers/http-exception.filter";
import { ChampService } from "./champ.service";
import { CreateChampDto, UpdateChampDto } from "./dto";
import { CheckCaslAbility } from "../casl/decorators/casl-ability.decorator";
import { JwtGuard } from "../auth/guard";
import { CaslAbilityGuard } from "../casl/guard";
import { GenericAbilities } from "../casl/decorators/generic-abilities";
import { ChampEntity } from "./entity";

@Controller("champ")
@UseFilters(AllExceptionsFilter)
export class ChampController {
  constructor(private readonly champService: ChampService) {}

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<ChampEntity>(new ChampEntity()).create(),
  )
  @Post()
  @UseInterceptors(FileInterceptor("shield"))
  create(
    @Body() createChampDto: CreateChampDto,
    @UploadedFile(ValidateTeamShield) file: Express.Multer.File,
  ) {
    return this.champService.create(createChampDto, file);
  }

  @Get()
  findAll() {
    return this.champService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.champService.findOne(id);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<ChampEntity>(new ChampEntity()).update(),
  )
  @Put(":id")
  update(@Param("id") id: string, @Body() updateChampDto: UpdateChampDto) {
    return this.champService.update(id, updateChampDto);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<ChampEntity>(new ChampEntity()).delete(),
  )
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.champService.remove(id);
  }
}
