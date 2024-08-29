import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from './activity.entity';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Activity])],  // Activity 리포지토리를 등록
  providers: [ActivityService],
  controllers: [ActivityController],
})
export class ActivityModule {}
