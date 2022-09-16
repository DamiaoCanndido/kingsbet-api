import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from "@nestjs/common";
import { RoundService } from "./round.service";
import { CreateRoundDto, UpdateRoundDto } from "./dto";

@Controller("round")
export class RoundController {
  constructor(private readonly roundService: RoundService) {}

  @Post()
  create(@Body() createRoundDto: CreateRoundDto) {
    return this.roundService.create(createRoundDto);
  }

  @Get(":champId")
  findByChamp(@Param("champId") champId: string) {
    return this.roundService.findByChamp(champId);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateRoundDto: UpdateRoundDto) {
    return this.roundService.update(id, updateRoundDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.roundService.remove(id);
  }
}
