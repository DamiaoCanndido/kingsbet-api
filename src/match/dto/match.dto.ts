import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateMatchDto {
  @IsString()
  @IsNotEmpty()
  gameId: string;

  @IsString()
  @IsNotEmpty()
  phaseId: string;
}

export class UpdateMatchDto {
  @IsOptional()
  @IsBoolean()
  isAvailable: boolean;
}
