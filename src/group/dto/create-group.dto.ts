import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateGroupDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  champId: string;
}

export class UpdateGroupDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  champId: string;
}
