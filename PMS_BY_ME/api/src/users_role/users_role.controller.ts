/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersRoleService } from './users_role.service';
import { UsersRole } from '../entity/user/users_role.entity';

@Controller('users-role')
export class UsersRoleController {
  constructor(private readonly usersRoleService: UsersRoleService) {}

  @Get()
  async findAll(): Promise<UsersRole[]> {
    return this.usersRoleService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<UsersRole> {
    return this.usersRoleService.findById(parseInt(id, 10));
  }

  @Post()
  async create(@Body() role: UsersRole): Promise<UsersRole> {
    return this.usersRoleService.create(role);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() role: UsersRole): Promise<UsersRole> {
    return this.usersRoleService.update(parseInt(id, 10), role);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.usersRoleService.delete(parseInt(id, 10));
  }
}
