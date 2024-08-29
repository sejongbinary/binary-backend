import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from '../comment/comment.entity';
import { Board } from '../board/board.entity';
import { Activity } from '../activity/activity.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @OneToMany(() => Board, board => board.user)
    boards: Board[];

    @OneToMany(() => Comment, comment => comment.user)
    comment: Comment[];

    @OneToMany(() => Activity, activity => activity.user)
    activities: Activity[];
}
