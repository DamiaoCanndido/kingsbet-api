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

export class CreateMatchDto {
  leagueId: string;

  @IsString()
  @IsNotEmpty()
  gameId: string;
}

export class CreatePlayerDto {
  userId: string;
  leagueId: string;
}

export class CreatePredictDto {
  matchId: string;
  playerId: string;
  leagueId: string;

  @IsString()
  @IsNotEmpty()
  gameId: string;

  @IsInt()
  @IsNotEmpty()
  homePredict: number;

  @IsInt()
  @IsNotEmpty()
  awayPredict: number;
}
