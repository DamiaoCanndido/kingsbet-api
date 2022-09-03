import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  UseFilters,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AllExceptionsFilter } from '../helpers/http-exception.filter';
import { JwtGuard } from '../auth/guard';
import { ValidateTeamShield } from '../helpers/validate-file';
import { CreateTeamDto, UpdateTeamDto } from './dto';
import { TeamService } from './team.service';
import { Action, CaslAbilityFactory, TeamEntity } from '../casl/casl-ability.factory';
import { CaslAbilityGuard } from '../casl/guard';
import { CheckCaslAbility } from '../casl/decorators';

@Controller('team')
@UseFilters(AllExceptionsFilter)
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility({action: Action.Create, subjects: TeamEntity})
  @Post()
  @UseInterceptors(FileInterceptor('shield'))
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(+id, updateTeamDto);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility({action: Action.Delete, subjects: TeamEntity})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(id);
  }
}
