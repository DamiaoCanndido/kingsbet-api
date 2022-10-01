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
  @IsNotEmpty()
  champId: string;

  @IsString()
  @IsNotEmpty()
  start: string;
}

export class UpdateGameDto {
  @IsInt()
  @IsOptional()
  homeScore: number;

  @IsInt()
  @IsOptional()
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
  @IsOptional()
  start: Date;

  @IsString()
  @IsOptional()
  champId: string;
}
