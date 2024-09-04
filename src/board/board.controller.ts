import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Get(':id/posts')
    async getUserBoards(@Param('id') userId: number) {
        return this.boardService.findBoardsByUser(userId);
    }

    @Post('createboard')
    async createBoard(
      @Body('title') title: string,
      @Body('content') content: string,
      @Body('userId') userId: number,
    ) {
      return this.boardService.createBoard(title, content, userId);
    }
    
}