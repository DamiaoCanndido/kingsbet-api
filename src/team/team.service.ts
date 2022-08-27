import { Injectable } from '@nestjs/common';
import { CreateTeamDto, UpdateTeamDto } from './dto';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TeamService {

  constructor(private config: ConfigService){}

  async create(createTeamDto: CreateTeamDto, file: Express.Multer.File) {

    const s3 = new S3();

    const shield = await s3.upload({
      Bucket: this.config.get("AWS_STORAGE_BUCKET_NAME"),
      ACL: "public-read",
      Key: file.originalname,
      Body: file.buffer,
    }).promise()

    return {file: shield};
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
