import { IsEnum, IsNotEmpty, IsString } from "class-validator"

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
}

export class UpdateTeamDto {}
