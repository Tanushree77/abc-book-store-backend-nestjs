/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dto/create-users.dto';
//import { UsersRepository } from './users.repository';
import { Users } from './entities/users.entity';
import { hash } from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async create(createUsersDto: CreateUsersDto) {
    createUsersDto.password = await hash(createUsersDto.password, 10)
    console.log("createuser", createUsersDto)
    const result = this.usersRepository.create(createUsersDto);

    try {
      await this.usersRepository.save(createUsersDto);
    } catch (error) {
      if(error.code = '23505'){
        throw new HttpException('Email already in use', HttpStatus.BAD_REQUEST);
      }
      throw error;
      
    }

    
    return result;
  }

  async getAllUsers(): Promise<Users[]> {
    const result = await this.usersRepository.find();
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }
}
