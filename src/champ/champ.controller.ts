import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseFilters,
  UseInterceptors,
  UploadedFile,
  Put,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ValidateTeamShield } from "../helpers/validate-file";
import { AllExceptionsFilter } from "../helpers/http-exception.filter";
import { ChampService } from "./champ.service";
import { CreateChampDto, UpdateChampDto } from "./dto";

@Controller("champ")
@UseFilters(AllExceptionsFilter)
export class ChampController {
  constructor(private readonly champService: ChampService) {}

  @Post()
  @UseInterceptors(FileInterceptor("shield"))
  create(
    @Body() createChampDto: CreateChampDto,
    @UploadedFile(ValidateTeamShield) file: Express.Multer.File,
  ) {
    return this.champService.create(createChampDto, file);
  }

  @Get()
  findAll() {
    return this.champService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.champService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateChampDto: UpdateChampDto) {
    return this.champService.update(id, updateChampDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.champService.remove(id);
  }
}
