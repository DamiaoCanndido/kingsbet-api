import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class CreateLeagueDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  playersAmount: number;

  @IsInt()
  @IsNotEmpty()
  matchesAmount: number;

  @IsNumber()
  @IsNotEmpty()
  subscription: number;

  @IsString()
  @IsNotEmpty()
  start: string;
}

export class UpdateLeagueDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  playersAccepted: number;
}

export class CreateMatch {
  @IsString()
  @IsNotEmpty()
  leagueId: string;

  @IsString()
  @IsNotEmpty()
  gameId: string;
}
