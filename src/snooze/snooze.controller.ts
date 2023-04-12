import { Controller} from '@nestjs/common';
import { SnoozeService } from './snooze.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Snooze')
@Controller({
    path: "snooze",
    version: "1"
})
export class SnoozeController {
    constructor(private snoozeService: SnoozeService) { }

}
