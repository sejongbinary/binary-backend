import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from './activity.entity';

@Injectable()
export class ActivityService {
    constructor(
        @InjectRepository(Activity)
        private readonly activityRepository: Repository<Activity>,  // Activity 리포지토리 주입
    ) {}

    async findActivitiesByUser(userId: number): Promise<Activity[]> {
        return this.activityRepository.find({ where: { user: { id: userId } } });
    }
}
