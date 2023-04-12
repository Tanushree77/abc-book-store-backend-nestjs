/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Snooze } from './entities/snooze.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SnoozeService {
    constructor(
        @InjectRepository(Snooze) private readonly snoozeRepository: Repository<Snooze>
    ) { }

    async getAllSnooze(): Promise<Snooze[]> {
        const result = await this.snoozeRepository.find();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
