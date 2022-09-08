import { Injectable } from "@nestjs/common";
import { CreateGroupDto, UpdateGroupDto } from "./dto/create-group.dto";

@Injectable()
export class GroupService {
  create(createGroupDto: CreateGroupDto) {
    return "This action adds a new group";
  }

  findAll() {
    return `This action returns all group`;
  }

  findOne(id: string) {
    return `This action returns a #${id} group`;
  }

  update(id: string, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: string) {
    return `This action removes a #${id} group`;
  }
}
