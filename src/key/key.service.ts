import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateKeyDto, UpdateKeyDto } from "./dto";

@Injectable()
export class KeyService {
  constructor(private prisma: PrismaService) {}

  async create(createKeyDto: CreateKeyDto) {
    const keyCheck = await this.prisma.keying.findFirst({
      where: { leagueId: createKeyDto.leagueId },
      orderBy: { order: "desc" },
    });
    if (!keyCheck) {
      createKeyDto.order = 1;
    } else {
      createKeyDto.order = keyCheck.order + 1;
    }
    const key = await this.prisma.keying.create({ data: createKeyDto });
    return key;
  }

  async findByLeague(leagueId: string) {
    const keys = await this.prisma.keying.findMany({ where: { leagueId } });
    return keys;
  }

  async findOne(id: string) {
    const key = await this.prisma.keying.findUnique({ where: { id } });
    return key;
  }

  async update(id: string, updateKeyDto: UpdateKeyDto) {
    const key = await this.prisma.keying.update({
      where: { id },
      data: updateKeyDto,
    });
    return key;
  }

  async remove(id: string) {
    const key = await this.prisma.keying.delete({ where: { id } });
    return key;
  }
}
