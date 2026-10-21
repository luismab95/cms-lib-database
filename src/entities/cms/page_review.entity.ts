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
    name: 'status_review',
    type: 'varchar',
    nullable: false,
    default: 'pending',
  })
  statusReview: PageReviewStatus;

  @Column({
    name: 'page_id',
    type: 'int',
    nullable: false,
  })
  pageId: number;

  @Column({
    name: 'user_changes_id',
    type: 'int',
    nullable: false,
  })
  userChangesId: number;

  @Column({
    name: 'user_review_id',
    type: 'int',
    nullable: true,
  })
  userReviewId: number;

  @ManyToOne(() => Page, (page: Page) => page.pageReviews)
  @JoinColumn({ name: 'page_id' })
  page: Relation<Page>;

  @ManyToOne(() => User, (user) => user.pageUserReviews)
  @JoinColumn({ name: 'user_review_id' })
  userReview: Relation<User>;

  @ManyToOne(() => User, (user) => user.pageUserChanges)
  @JoinColumn({ name: 'user_changes_id' })
  userChanges: Relation<User>;
}
