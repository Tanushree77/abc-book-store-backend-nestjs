import { Controller} from '@nestjs/common';
import { LogTrackerService } from './log_tracker.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('LogTracker')
@Controller({
    path: "logTracker",
    version: "1"
})
export class LogTrackerController {
    constructor(private logTrackerService: LogTrackerService) { }

}
