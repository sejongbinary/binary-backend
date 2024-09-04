import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { User } from 'binary-backend/src/user/user.entity';
import { BoardModule } from 'binary-backend/src/board/board.module';
import { UsersModule } from 'binary-backend/src/user/user.module';
import { Board } from 'binary-backend/src/board/board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, User, Board]), forwardRef(() => BoardModule),
UsersModule],
  providers: [CommentService],
  controllers: [CommentController],
  exports: [TypeOrmModule],
})
export class CommentModule {}