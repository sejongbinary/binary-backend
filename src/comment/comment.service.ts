import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { Board } from 'src/board/board.entity';
import { User } from 'src/user/user.entity';


@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
        @InjectRepository(Board)
        private readonly boardRepository: Repository<Board>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>

    ) {}



    async findCommentsByUser(userId: number): Promise<Comment[]> {
        return this.commentRepository.find({
            where: { user: { id: userId } },
            order: { createdAt: 'DESC' },
            relations: ['post'],
        });
    }

    async createComment(content : string, postId: number , userId : number) : Promise<Comment>{
        const user = await this.userRepository.findOne({where: { id: userId}});
        const board = await this.boardRepository.findOne({ where: {id: postId}});
        const comment = this.commentRepository.create({content, user, board});
        return this.commentRepository.save(comment);
    }
}
