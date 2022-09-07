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
import { ChampAbility } from "../casl/decorators/champ-abilities/champ-abilities";

@Controller("champ")
@UseFilters(AllExceptionsFilter)
export class ChampController {
  constructor(private readonly champService: ChampService) {}

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new ChampAbility().createChamp())
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
  @CheckCaslAbility(new ChampAbility().updateChamp())
  @Put(":id")
  update(@Param("id") id: string, @Body() updateChampDto: UpdateChampDto) {
    return this.champService.update(id, updateChampDto);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new ChampAbility().deleteChamp())
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.champService.remove(id);
  }
}
