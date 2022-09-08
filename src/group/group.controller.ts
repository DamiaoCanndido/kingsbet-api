import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from "@nestjs/common";
import { GroupService } from "./group.service";
import { CreateGroupDto, UpdateGroupDto } from "./dto";

@Controller("group")
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Get(":champId")
  findByChamp(@Param("champId") champId: string) {
    return this.groupService.findByChamp(champId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.groupService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(id, updateGroupDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.groupService.remove(id);
  }
}
