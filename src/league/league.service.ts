import { Injectable } from "@nestjs/common";
import { CreateLeagueDto, UpdateLeagueDto } from "./dto";

@Injectable()
export class LeagueService {
  create(createLeagueDto: CreateLeagueDto) {
    return "This action adds a new league";
  }

  findAll() {
    return `This action returns all league`;
  }

  findOne(id: string) {
    return `This action returns a #${id} league`;
  }

  update(id: string, updateLeagueDto: UpdateLeagueDto) {
    return `This action updates a #${id} league`;
  }

  remove(id: string) {
    return `This action removes a #${id} league`;
  }
}
