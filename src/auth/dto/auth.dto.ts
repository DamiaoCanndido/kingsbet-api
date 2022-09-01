import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class SignInDTO {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @MinLength(6)
    @IsString()
    @IsNotEmpty()
    password: string
}

export class SignUpDTO {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @MinLength(6)
    @IsString()
    @IsNotEmpty()
    password: string

    @MinLength(6)
    @IsString()
    @IsNotEmpty()
    confirmPassword: string
}

export class editNameDTO {
    @IsString()
    @IsNotEmpty()
    name: string
}