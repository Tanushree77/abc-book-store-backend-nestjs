/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Priority } from './entities/priority.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PriorityService {
    constructor(
        @InjectRepository(Priority) private readonly priorityRepository: Repository<Priority>
    ) { }

    async getAllPriority(): Promise<Priority[]> {
        const result = await this.priorityRepository.find();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
