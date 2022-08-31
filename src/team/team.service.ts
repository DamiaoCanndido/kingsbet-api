import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeamDto, UpdateTeamDto } from './dto';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { FileHandler } from '../helpers/file-handler';

@Injectable()
export class TeamService {

  constructor(private config: ConfigService, private prisma: PrismaService){}

  async create(createTeamDto: CreateTeamDto, file: Express.Multer.File) {

    try {

      const fileHandler = new FileHandler(this.config, file);
      const shield = await fileHandler.upload();

      const team = await this.prisma.team.create({
        data: {
          name: createTeamDto.name,
          country: createTeamDto.country,
          stadium: createTeamDto.stadium,
          teamType: createTeamDto.teamType,
          code: createTeamDto.code.toUpperCase(),
          shieldKey: shield.Key,
          shieldUrl: shield.Location,
        }
      })

      return team;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError){
        if (error.code === 'P2002') {
            throw new ForbiddenException("Team already exists.")
        }
      }
      throw new NotFoundException();
    }
  }

  findAll() {
    return `This action returns all team`;
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  async remove(id: string) {
    try {
      const team = await this.prisma.team.delete({where: {id}})
      const fileHandler = new FileHandler(this.config);
      await fileHandler.remove(team.shieldKey);
      return {
        message: `The team ${team.name} has removed`,
        statusCode: 200
      }
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError){
        if (error.code === 'P2002') {
            throw new ForbiddenException("An error occurred during removal")
        }
      }
      throw new NotFoundException();
    }
  }
}
