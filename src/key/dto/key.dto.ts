import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export class CreateKeyDto {
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
  playersAmount: number;

  @IsInt()
  @IsNotEmpty()
  phasesAmount: number;

  @IsOptional()
  @IsBoolean()
  isPlayOffs: boolean;

  @IsOptional()
  @IsInt()
  playerKickAmount: number;
}

export class UpdateKeyDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsInt()
  @IsOptional()
  finishedPhases: number;

  @IsBoolean()
  @IsOptional()
  isPlayOffs: boolean;

  @IsInt()
  @IsOptional()
  playerKickAmount: number;
}
