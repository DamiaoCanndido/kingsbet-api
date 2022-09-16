import { Injectable } from "@nestjs/common";
import { CreateRoundDto, UpdateRoundDto } from "./dto";

@Injectable()
export class RoundService {
  create(createRoundDto: CreateRoundDto) {
    return "This action adds a new round";
  }

  findAll() {
    return `This action returns all round`;
  }

  findOne(id: string) {
    return `This action returns a #${id} round`;
  }

  update(id: string, updateRoundDto: UpdateRoundDto) {
    return `This action updates a #${id} round`;
  }

  remove(id: string) {
    return `This action removes a #${id} round`;
  }
}
