import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateTeamDto, UpdateTeamDto } from './dto';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { UploadFile } from '../helpers/upload-file';

@Injectable()
export class TeamService {

  constructor(private config: ConfigService, private prisma: PrismaService){}

  async create(createTeamDto: CreateTeamDto, file: Express.Multer.File) {

    try {

      const uploadFile = new UploadFile(this.config, file);
      const shield = await uploadFile.upload();

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
            throw new ForbiddenException("User already exists.")
        }
      }
      throw error;
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

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
