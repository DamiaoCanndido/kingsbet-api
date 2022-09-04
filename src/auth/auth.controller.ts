import { Body, Controller, Post, UseFilters } from "@nestjs/common";
import { AllExceptionsFilter } from "../helpers/http-exception.filter";
import { AuthService } from "./auth.service";
import { SignInDTO, SignUpDTO } from "./dto";

@Controller("auth")
@UseFilters(AllExceptionsFilter)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  signup(@Body() dto: SignUpDTO) {
    return this.authService.signup(dto);
  }

  @Post("signin")
  signin(@Body() dto: SignInDTO) {
    return this.authService.signin(dto);
  }
}
