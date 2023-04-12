/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Segment } from './entities/segment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SegmentService {
    constructor(
        @InjectRepository(Segment) private readonly segmentRepository: Repository<Segment>
    ) { }

    async getAllSegment(): Promise<Segment[]> {
        const result = await this.segmentRepository.find();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
