import { Controller, Get, Param } from '@nestjs/common';
import { ActivityService } from './activity.service';

@Controller('users')
export class ActivityController {
    constructor(private readonly activityService: ActivityService) {}

    @Get(':id/activities')
    async getUserActivities(@Param('id') userId: number) {
        return this.activityService.findActivitiesByUser(userId);
    }
}
