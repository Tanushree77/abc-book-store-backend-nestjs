/* eslint-disable prettier/prettier */
import { Controller, Get} from '@nestjs/common';
import { PriorityService } from './priority.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Priority')
@Controller({
    path: "priority",
    version: "1"
})
export class PriorityController {
    constructor(private priorityService: PriorityService) { }

    @Get()
    async findAll() {
      const data = await this.priorityService.getAllPriority();
      return {
        success: true,
        data: data,
        message: '',
      };
    }

}
