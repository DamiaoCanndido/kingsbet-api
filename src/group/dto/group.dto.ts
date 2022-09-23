import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";
import { GroupType } from "@prisma/client";

export class CreateGroupDto {
  @IsOptional()
  @IsEnum(GroupType)
  name: GroupType;

  @IsOptional()
  @IsInt()
  order: number;

  @IsString()
  @IsNotEmpty()
  champId: string;
}

export class UpdateGroupDto {
  @IsEnum(GroupType)
  @IsOptional()
  name: GroupType;
}
