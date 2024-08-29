import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { User } from 'src/user/user.entity';
import { BoardModule } from 'src/board/board.module';
import { UsersModule } from 'src/user/user.module';
import { Board } from 'src/board/board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, User, Board]), forwardRef(() => BoardModule),
UsersModule],
  providers: [CommentService],
  controllers: [CommentController],
  exports: [TypeOrmModule],
})
export class CommentModule {}