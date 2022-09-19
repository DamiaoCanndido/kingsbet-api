import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

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

  @IsNumber()
  @IsNotEmpty()
  subscription: number;
}

export class UpdateLeagueDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
