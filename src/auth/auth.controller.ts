import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDTO, SignUpDTO } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signup')
    signup(@Body() dto: SignUpDTO){
        return this.authService.signup()
    }

    @Post('signin')
    signin(@Body() dto: SignInDTO){
        return this.authService.signin()
    }
}