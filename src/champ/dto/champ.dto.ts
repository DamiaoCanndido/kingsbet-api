import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export enum ChampType {
  LEAGUE = "LEAGUE",
  CUP = "CUP",
}

export class CreateChampDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  season: string;

  @IsEnum(ChampType)
  @IsNotEmpty()
  champType: ChampType;
}

export class UpdateChampDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  country: string;

  @IsEnum(ChampType)
  @IsOptional()
  champType: ChampType;
}
