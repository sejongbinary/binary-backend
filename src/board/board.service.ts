import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity'; // Board 엔티티 임포트
import { User } from '../user/user.entity';   // User 엔티티 임포트

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findBoardsByUser(userId: number): Promise<Board[]> {
    return this.boardRepository.find({ where: { user: { id: userId } } });
  }

  async createBoard(title: string, content: string, userId: number): Promise<Board> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }
  
    const board = this.boardRepository.create({ title, content, user });
    return this.boardRepository.save(board);
  }
  
  }
  
