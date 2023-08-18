/* eslint-disable prettier/prettier */
import { Body, Controller, Post} from '@nestjs/common';
import { LoginDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {

    constructor(
        private readonly authService:AuthService, 
    ){}
    @Post('login')
    async login(@Body() loginDTO: LoginDTO) {
        return await this.authService.login(loginDTO);
    }
}
