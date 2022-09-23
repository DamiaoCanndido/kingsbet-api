import { Injectable } from "@nestjs/common";
import { CreateKeyDto, UpdateKeyDto } from "./dto";

@Injectable()
export class KeyService {
  create(createKeyDto: CreateKeyDto) {
    return "This action adds a new key";
  }

  findAll() {
    return `This action returns all key`;
  }

  findOne(id: string) {
    return `This action returns a #${id} key`;
  }

  update(id: string, updateKeyDto: UpdateKeyDto) {
    return `This action updates a #${id} key`;
  }

  remove(id: string) {
    return `This action removes a #${id} key`;
  }
}
