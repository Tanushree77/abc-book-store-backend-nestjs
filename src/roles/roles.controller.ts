/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { RolesService } from './roles.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Roles')
@Controller({
  path: 'roles',
  version: '1',
})
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get()
  async findAll() {
    const data = await this.rolesService.getAllRoles();
    return {
      success: true,
      data: data,
      message: '',
    };
  }
}
function findAll() {
  throw new Error('Function not implemented.');
}
