import { IsNotEmpty, IsString } from "class-validator";

export class editNameDTO {
    @IsString()
    @IsNotEmpty()
    name: string
}

export class editAdminStatusDTO {
    @IsString()
    @IsNotEmpty()
    serverCode: string
}