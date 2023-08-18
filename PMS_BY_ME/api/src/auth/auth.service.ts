/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entity/user/users.entity';
import { Repository } from 'typeorm';
import { LoginDTO } from './auth.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) {}
    async login(loginDTO: LoginDTO){
        const {email, password} = loginDTO;
        const user = await this.usersRepository.findOneBy({ email: email});
        if(!user){
            throw new HttpException('Invalid Credential!', 400);
        }
        const existingPassword: boolean = await bcrypt.compare(password,user.password);        
        if(!existingPassword){
            throw new HttpException('Password do not match', 400);
        }
        delete user.password;
        delete user.created_at;
        delete user.updated_at;
        delete user.deleted_at;
        const token: string = await this.generateToken(user);
        return {
            success: true,
            token_type: 'bearer',
            data: user,
            token: token
        }
    }
    private generateToken(user: any){
        return jwt.sign(user,
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:'1d'
            }
        )
        
    }
}
