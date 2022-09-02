import { Body, Controller, Get, Patch, UseFilters, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { editNameDTO } from '../auth/dto';
import { GetUser } from '../auth/decorators';
import { JwtGuard } from '../auth/guard';
import { UserService } from './user.service';
import { AllExceptionsFilter } from '../helpers/http-exception.filter';

@UseGuards(JwtGuard)
@UseFilters(AllExceptionsFilter)
@Controller('users')
export class UserController {

    constructor(private userService: UserService){}

    @Get('me')
    getMe(@GetUser() user: User){
        return user;
    }

    @Patch('edit/name')
    editNameUser(@GetUser() user: User, @Body() dto: editNameDTO){
        return this.userService.editNameUser(user, dto);
    }
}
