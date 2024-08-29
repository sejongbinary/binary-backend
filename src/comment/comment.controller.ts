import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Request } from 'express';
@Controller('user')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @Get(':id/comments')
    async getUserComments(@Param('id') userId: number) {
        return this.commentService.findCommentsByUser(userId);
    }

    @Post('createcomment')
    async createComment(
        @Body('content') content: string,
        @Body('postId') postId: number,
        @Body('userId') userId: number,
    ){
        return this.commentService.createComment(content, postId, userId);

    }
}