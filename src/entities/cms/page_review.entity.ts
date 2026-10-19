import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Relation,
} from 'typeorm';
import { Page } from './page.entity.js';
import { User } from '../index.js';
import { PageReviewStatus } from '@shared/interfaces/page-review.interface.js';

@Entity({ name: 'page_review', schema: 'public' })
export class PageReview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'mongo_id',
    type: 'varchar',
    nullable: false,
  })
  mongoId: string;

  @Column({
    name: 'comment',
    type: 'text',
    nullable: true,
  })
  comment: string;

  @Column({
    name: 'status',
    type: 'varchar',
    nullable: false,
  })
  status: PageReviewStatus;

  @Column({
    name: 'page_id',
    type: 'int',
    nullable: false,
  })
  pageId: number;
  
  @Column({
    name: 'user_id',
    type: 'int',
    nullable: false,
  })
  userId: number;

  @ManyToOne(() => Page, (page: Page) => page.pageReviews)
  @JoinColumn({ name: 'page_id' })
  page: Relation<Page>;

  @ManyToOne(() => User, (user) => user.pageReviews)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;
}
