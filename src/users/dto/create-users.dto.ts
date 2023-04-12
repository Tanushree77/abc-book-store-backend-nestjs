/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from 'class-validator';
import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class CreateUsersDto {
 

  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  role: number;

  @IsString()
  mobile: string;

  address: string;

  country: string;

  city: string;
}
