/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsNumber, IsPositive, IsString, Matches, MinLength } from "class-validator"

export class CreateUserDTO{
  
    @IsString()
    @IsNotEmpty()
    username: string

    @IsNumber()
    @IsPositive()
    type_id: number

    @Matches(/^(\+855|0)[1-9]\d{7,8}$/, {
        message: 'Phone must be valit Cambodia phone number'
    })
    phone: string;

    @IsEmail()
    email: string

    @MinLength(6)
    @IsString()
    password: string

    @IsString()
    @IsNotEmpty()
    avatar: string
    
    
    
}