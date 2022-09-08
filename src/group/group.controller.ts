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
import { GroupAbility } from "../casl/decorators/group-abilities/group-abilities";

@Controller("group")
@UseFilters(AllExceptionsFilter)
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new GroupAbility().createGroup())
  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Get(":champId")
  findByChamp(@Param("champId") champId: string) {
    return this.groupService.findByChamp(champId);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new GroupAbility().updateGroup())
  @Put(":id")
  update(@Param("id") id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(id, updateGroupDto);
  }

  @UseGuards(JwtGuard, CaslAbilityGuard)
  @CheckCaslAbility(new GroupAbility().deleteGroup())
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.groupService.remove(id);
  }
}
