import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { FileHandler } from "../helpers/file-handler";
import { PrismaService } from "../prisma/prisma.service";
import { CreateChampDto, UpdateChampDto } from "./dto";

@Injectable()
export class ChampService {
  constructor(private config: ConfigService, private prisma: PrismaService) {}

  async create(createChampDto: CreateChampDto, file: Express.Multer.File) {
    const fileHandler = new FileHandler(this.config, "Champ", file);
    const shield = await fileHandler.upload();

    const champ = await this.prisma.champ.create({
      data: {
        name: createChampDto.name,
        country: createChampDto.country,
        champType: createChampDto.champType,
        shieldKey: shield.Key,
        shieldUrl: shield.Location,
      },
    });

    return champ;
  }

  async findAll() {
    const champs = await this.prisma.champ.findMany({
      include: {
        rounds: {},
        groups: {
          include: { games: {}, rounds: {} },
        },
      },
    });
    return champs;
  }

  async findOne(id: string) {
    const champ = await this.prisma.champ.findUnique({
      where: { id },
    });
    return champ;
  }

  async update(id: string, updateChampDto: UpdateChampDto) {
    const champ = await this.prisma.champ.update({
      where: { id },
      data: updateChampDto,
    });
    return champ;
  }

  async remove(id: string) {
    const champ = await this.prisma.champ.delete({ where: { id } });
    const fileHandler = new FileHandler(this.config);
    await fileHandler.remove(champ.shieldKey);
    return {
      message: `The champ ${champ.name} has removed`,
      statusCode: 200,
    };
  }
}
