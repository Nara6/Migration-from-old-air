/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { Users } from 'src/entity/user/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(readonly usersService: UsersService){}
    @Get()
    async getAllUsers(): Promise<Users[]>{
        return this.usersService.findAllUsers();
    }
}
