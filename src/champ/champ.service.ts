import { Injectable } from '@nestjs/common';
import { CreateChampDto, UpdateChampDto } from './dto';

@Injectable()
export class ChampService {
  create(createChampDto: CreateChampDto) {
    return 'This action adds a new champ';
  }

  findAll() {
    return `This action returns all champ`;
  }

  findOne(id: number) {
    return `This action returns a #${id} champ`;
  }

  update(id: number, updateChampDto: UpdateChampDto) {
    return `This action updates a #${id} champ`;
  }

  remove(id: number) {
    return `This action removes a #${id} champ`;
  }
}
