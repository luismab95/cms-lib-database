import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
  Relation,
  ManyToOne,
} from 'typeorm';
import { User } from '../security/user.entity.js';

@Entity({ name: 'notify', schema: 'public' })
export class Notify {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'message',
    type: 'text',
    nullable: false,
  })
  message: string;

  @Column({
    name: 'metadata',
    type: 'json',
    nullable: false,
  })
  metadata: { [key: string]: any };

  @Column({
    name: 'read_status',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  readStatus: boolean;

  @Column({
    name: 'user_id',
    type: 'int',
    nullable: false,
  })
  userId: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @ManyToOne(() => User, (user: User) => user.notifies)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;
}
