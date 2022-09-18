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
import { GroupService } from "./group.service";
import { CreateGroupDto, UpdateGroupDto } from "./dto";
import { AllExceptionsFilter } from "../helpers/http-exception.filter";
import { JwtGuard } from "../auth/guard";
import { CaslAbilityGuard } from "../casl/guard";
import { CheckCaslAbility } from "../casl/decorators";
import { GroupEntity } from "./entity";
import { GenericAbilities } from "../casl/decorators/generic-abilities";

@Controller("group")
@UseFilters(AllExceptionsFilter)
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<GroupEntity>(new GroupEntity()).create(),
  )
  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Get(":champId")
  findByChamp(@Param("champId") champId: string) {
    return this.groupService.findByChamp(champId);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<GroupEntity>(new GroupEntity()).update(),
  )
  @Put(":id")
  update(@Param("id") id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(id, updateGroupDto);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(
    new GenericAbilities<GroupEntity>(new GroupEntity()).delete(),
  )
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.groupService.remove(id);
  }
}
