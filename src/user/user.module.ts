import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { Board } from 'binary-backend/src/board/board.entity';
import { Comment } from 'binary-backend/src/comment/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Board, Comment]), ],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
