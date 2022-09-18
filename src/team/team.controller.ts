import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  UseFilters,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { AllExceptionsFilter } from "../helpers/http-exception.filter";
import { JwtGuard } from "../auth/guard";
import { ValidateTeamShield } from "../helpers/validate-file";
import { CreateTeamDto, UpdateTeamDto } from "./dto";
import { TeamService } from "./team.service";
import { CaslAbilityGuard } from "../casl/guard";
import { CheckCaslAbility } from "../casl/decorators";
import { Put } from "@nestjs/common/decorators";
import { GenericAbilities } from "../casl/decorators/generic-abilities";
import { TeamEntity } from "./entity";

@Controller("team")
@UseFilters(AllExceptionsFilter)
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new GenericAbilities<TeamEntity>(new TeamEntity()).create())
  @Post()
  @UseInterceptors(FileInterceptor("shield"))
  create(
    @Body() createTeamDto: CreateTeamDto,
    @UploadedFile(ValidateTeamShield) file: Express.Multer.File,
  ) {
    return this.teamService.create(createTeamDto, file);
  }

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.teamService.findOne(id);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new GenericAbilities<TeamEntity>(new TeamEntity()).update())
  @Put(":id")
  update(@Param("id") id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(id, updateTeamDto);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new GenericAbilities<TeamEntity>(new TeamEntity()).delete())
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.teamService.remove(id);
  }
}
