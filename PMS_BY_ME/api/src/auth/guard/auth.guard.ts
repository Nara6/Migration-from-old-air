/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as jwt from 'jsonwebtoken';
import { Users } from "src/entity/user/users.entity";
import { Repository } from "typeorm";
interface JwtPayload {
    id: number
}

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean>{
        const request = context.switchToHttp().getRequest();
            const token: string = request.headers?.authorization?.split('Bearer ')[1];
            try {
                const payload = jwt.verify(token, process.env.JWT_SECRET_KEY) as JwtPayload;

                const user = await this.usersRepository.findOneBy({id: payload.id});
                if(!user) return false;
                return true;
            } catch (error) {
                if(error && error.message) {
                    if(error.message.includes('jwt expired')){
                        throw new UnauthorizedException('Token has been expired')
                    }else if(error.message.includes('jwt must be provided')){
                        throw new UnauthorizedException('Token must be provided')
                    }else if(error.message.includes('jwt malformed')){
                        throw new UnauthorizedException('Token is invalid')
                    }
                }
                return false
            }

    }
}