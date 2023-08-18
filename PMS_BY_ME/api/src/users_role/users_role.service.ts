/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersRole } from '../entity/user/users_role.entity';


@Injectable()
export class UsersRoleService {
  constructor(
    @InjectRepository(UsersRole)
    private readonly UsersRoleRepository: Repository<UsersRole>,
  ) {}

  async findAll(): Promise<UsersRole[]> {
    return this.UsersRoleRepository.find();
  }

  async findById(id: number): Promise<UsersRole> {
    return this.UsersRoleRepository.findOneBy({id: id});
  }

  async create(role: UsersRole): Promise<UsersRole> {
    return this.UsersRoleRepository.save(role);
  }

  async update(id: number, role: UsersRole): Promise<UsersRole> {
    await this.UsersRoleRepository.update(id, role);
    return this.UsersRoleRepository.findOneBy({id:id});
  }

  async delete(id: number): Promise<void> {
    await this.UsersRoleRepository.delete(id);
  }

}
