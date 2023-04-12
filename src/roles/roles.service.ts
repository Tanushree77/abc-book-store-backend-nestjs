/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from './entities/roles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Roles) private readonly rolesRepository: Repository<Roles>
    ) { }

    async getAllRoles(): Promise<Roles[]> {
        const result = await this.rolesRepository.find();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
