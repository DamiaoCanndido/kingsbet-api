import { RoundType } from "@prisma/client";
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export class CreateRoundDto {
  @IsEnum(RoundType)
  @IsOptional()
  name: string;

  @IsString()
  @IsNotEmpty()
  champId: string;

  @IsString()
  @IsOptional()
  groupId: string;

  @IsInt()
  @IsNotEmpty()
  numberGames: number;
}

export class UpdateRoundDto {
  @IsEnum(RoundType)
  @IsOptional()
  name: string;

  @IsInt()
  @IsOptional()
  numberGames: number;
}
