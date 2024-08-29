import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';


@Entity()
export class Activity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    activity_name: string;

    @Column()
    status: string;

    @Column({ type: 'date' })
    start_date: string;

    @Column({ type: 'date' })
    end_date: string;

    @ManyToOne(() => User, (user) => user.activities)
    user: User;
}
