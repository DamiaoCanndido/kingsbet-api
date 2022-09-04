import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ChampService } from "./champ.service";
import { CreateChampDto, UpdateChampDto } from "./dto";

@Controller("champ")
export class ChampController {
  constructor(private readonly champService: ChampService) {}

  @Post()
  create(@Body() createChampDto: CreateChampDto) {
    return this.champService.create(createChampDto);
  }

  @Get()
  findAll() {
    return this.champService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.champService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateChampDto: UpdateChampDto) {
    return this.champService.update(+id, updateChampDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.champService.remove(+id);
  }
}
