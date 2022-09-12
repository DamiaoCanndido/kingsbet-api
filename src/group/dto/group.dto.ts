import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { GroupType } from "@prisma/client";

export class CreateGroupDto {
  @IsEnum(GroupType)
  @IsOptional()
  name: GroupType;

  @IsString()
  @IsNotEmpty()
  champId: string;
}

export class UpdateGroupDto {
  @IsEnum(GroupType)
  @IsOptional()
  name: GroupType;
}
