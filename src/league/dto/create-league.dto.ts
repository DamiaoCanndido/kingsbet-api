import { IsDecimal, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateLeagueDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  playerAmount: number;

  @IsInt()
  @IsNotEmpty()
  keysAmount: number;

  @IsInt()
  @IsNotEmpty()
  phasesAmount: number;

  @IsInt()
  @IsNotEmpty()
  matchesAmount: number;

  @IsDecimal()
  @IsNotEmpty()
  subscription: number;
}

export class UpdateLeagueDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
