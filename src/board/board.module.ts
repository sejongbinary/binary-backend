import { forwardRef, Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { Board } from './board.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'binary-backend/src/user/user.entity';
import { UsersModule } from 'binary-backend/src/user/user.module';
import { Comment } from 'binary-backend/src/comment/comment.entity';
import { CommentModule } from 'binary-backend/src/comment/comment.module';
@Module({
  imports: [TypeOrmModule.forFeature([Board, Comment, User]), UsersModule, forwardRef(() => CommentModule)],
  controllers: [BoardController],
  providers: [BoardService],
  exports: [TypeOrmModule],
})
export class BoardModule {}
