import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  homeId: string;

  @IsString()
  @IsNotEmpty()
  awayId: string;

  @IsString()
  @IsNotEmpty()
  roundId: string;

  @IsString()
  @IsOptional()
  groupId: string;

  @IsDate()
  @IsNotEmpty()
  start: Date;
}

export class UpdateGameDto {
  @IsInt()
  @IsNotEmpty()
  homeScore: number;

  @IsInt()
  @IsNotEmpty()
  awayScore: number;

  @IsInt()
  @IsOptional()
  homeKickScore: number;

  @IsInt()
  @IsOptional()
  awayKickScore: number;

  @IsOptional()
  @IsBoolean()
  playOffs: boolean;

  @IsDate()
  @IsNotEmpty()
  start: Date;
}
