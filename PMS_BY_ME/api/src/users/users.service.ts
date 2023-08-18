/* eslint-disable prettier/prettier */
import { HttpException, Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entity/user/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './users.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>){}
    async findAllUsers(): Promise<Users[]>{
        return await this.usersRepository.find();
    }
    // async createUser(createUserDTO: CreateUserDTO): Promise<Users>{
    //     const isEmailExist = await this.usersRepository.findOneBy({email: createUserDTO.email});
    //     if(isEmailExist){
    //         throw new HttpException('This email is already exist', 400);
    //     }
    //     const isUsernameExist = await this.usersRepository.findOneBy({username: createUserDTO.username});
    //     if(isUsernameExist){
    //         throw new HttpException('This username is already exist', 400);
    //     }
    //     const hashPassword = await bcrypt.hash(createUserDTO.password, process.env.BCRYPT_SALT_ROUNDS);
        
    // }
}
