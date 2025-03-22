import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Page } from "../public-api";
import { User } from "../security/user.entity";

export type PageReviewStatus = "pending" | "approved" | "rejected";

@Entity({ name: "page_review", schema: "public" })
export class PageReview {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: "mongo_id",
    type: "varchar",
    nullable: false,
  })
  mongoId!: string;

  @Column({
    name: "comment",
    type: "text",
    nullable: true,
  })
  comment!: string;

  @Column({
    name: "status",
    type: "varchar",
    nullable: false,
  })
  status!: PageReviewStatus;

  @Column({
    name: "page_id",
    type: "int",
    nullable: false,
  })
  pageId!: number;

  @ManyToOne(() => Page, (page) => page.pageReviews)
  @JoinColumn({ name: "page_id" })
  page!: Page;

  @Column({
    name: "user_id",
    type: "int",
    nullable: false,
  })
  userId!: number;

  @ManyToOne(() => User, (user) => user.pageReviews)
  @JoinColumn({ name: "user_id" })
  user!: User;
}
