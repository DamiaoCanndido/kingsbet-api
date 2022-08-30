import { IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export enum TeamType {
    CLUB = "CLUB",
    SELECTION = "SELECTION"
}

export class CreateTeamDto {

    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsString()
    @IsNotEmpty()
    country: string

    @IsString()
    @IsNotEmpty()
    stadium: string

    @IsEnum(TeamType)
    @IsNotEmpty()
    teamType: TeamType

    @IsString()
    @IsNotEmpty()
    @MaxLength(3)
    @MinLength(3)
    code: string
}

export class UpdateTeamDto {}
