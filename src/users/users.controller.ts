/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUsersDto } from './dto/create-users.dto';
import { UsersMiddleware } from './middleware/users.middleware';

@ApiTags('Users')
@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UsePipes(new ValidationPipe())
  @Post('/create')
  create(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.create(createUsersDto);
  }
  @Get()
  async findAll() {
    const data = await this.usersService.getAllUsers();
    return {
      success: true,
      data: data,
      message: ""
    }
  }
}
