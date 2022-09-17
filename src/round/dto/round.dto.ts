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
  name: RoundType;

  @IsString()
  @IsNotEmpty()
  champId: string;

  @IsString()
  @IsNotEmpty()
  groupId: string;

  @IsInt()
  @IsNotEmpty()
  numberGames: number;
}

export class UpdateRoundDto {
  @IsEnum(RoundType)
  @IsOptional()
  name: RoundType;

  @IsInt()
  @IsOptional()
  numberGames: number;
}
