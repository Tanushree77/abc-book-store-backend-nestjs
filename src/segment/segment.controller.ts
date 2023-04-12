/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { SegmentService } from './segment.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Segment')
@Controller({
  path: 'segment',
  version: '1',
})
export class SegmentController {
  constructor(private segmentService: SegmentService) {}

  @Get()
  async findAll() {
    const data = await this.segmentService.getAllSegment();
    return {
      success: true,
      data: data,
      message: '',
    };
  }
}
