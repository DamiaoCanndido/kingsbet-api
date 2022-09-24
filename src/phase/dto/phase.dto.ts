import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export class CreatePhaseDto {
  @IsOptional()
  @IsInt()
  order: number;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsNotEmpty()
  leagueId: string;

  @IsInt()
  @IsNotEmpty()
  matchesAmount: number;

  @IsOptional()
  @IsInt()
  fullMatches: number;

  @IsOptional()
  @IsBoolean()
  isPlayOffs: boolean;

  @IsOptional()
  @IsInt()
  playerKickAmount: number;

  @IsOptional()
  @IsBoolean()
  isAvailable: boolean;
}

export class UpdatePhaseDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsInt()
  @IsOptional()
  fullMatches: number;

  @IsBoolean()
  @IsOptional()
  isPlayOffs: boolean;

  @IsInt()
  @IsOptional()
  playerKickAmount: number;

  @IsOptional()
  @IsBoolean()
  isAvailable: boolean;
}
