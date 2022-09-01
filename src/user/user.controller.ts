import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { editNameDTO } from '../auth/dto';
import { GetUser } from '../auth/decorators';
import { JwtGuard } from '../auth/guard';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
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
