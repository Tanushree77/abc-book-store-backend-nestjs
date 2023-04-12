/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LogTracker } from './entities/log_tracker.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LogTrackerService {
    constructor(
        @InjectRepository(LogTracker) private readonly logTrackerRepository: Repository<LogTracker>
    ) { }

    async getAllLogTracker(): Promise<LogTracker[]> {
        const result = await this.logTrackerRepository.find();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
