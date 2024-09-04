import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/user.module';
import { BoardModule } from './board/board.module';
import { CommentModule } from './comment/comment.module';
import { ActivityModule } from './activity/activity.module';
import { Board } from './board/board.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // MySQL로 변경
      host: 'localhost',
      port: 3306, // MySQL의 기본 포트는 3306입니다.
      username: 'root', // MySQL 사용자명
      password: 'yngg24kkr', // MySQL 비밀번호
      database: 'binaryproject', // 사용하려는 데이터베이스 이름
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      
    }),
    UsersModule,
    BoardModule,
    CommentModule,
    ActivityModule,
  ],
})
export class AppModule {}
