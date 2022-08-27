import { IsNotEmpty, IsString } from "class-validator"

export class CreateTeamDto {

    // @IsString()
    // @IsNotEmpty()
    name: string
    
    // @IsString()
    // @IsNotEmpty()
    country: string

    // @IsString()
    // @IsNotEmpty()
    stadium: string

    // @IsString()
    // @IsNotEmpty()
    teamType: string
}

export class UpdateTeamDto {}
