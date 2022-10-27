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

  @IsOptional()
  @IsInt()
  order: number;

  @IsString()
  @IsNotEmpty()
  groupId: string;
}

export class UpdateRoundDto {
  @IsEnum(RoundType)
  @IsOptional()
  name: RoundType;
}
