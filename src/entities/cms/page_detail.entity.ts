import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Page } from "../public-api";

@Entity({ name: "page_detail", schema: "public" })
export class PageDetail {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: "alias_ref",
    type: "varchar",
    nullable: false,
  })
  aliasRef!: string;

  @Column({
    name: "description_ref",
    type: "varchar",
    nullable: false,
  })
  descriptionRef!: string;

  @Column({
    name: "seo_keywords_ref",
    type: "varchar",
    nullable: false,
  })
  seoKeywordsRef!: string;

  @Column({
    name: "page_id",
    type: "int",
    nullable: false,
  })
  pageId!: number;

  @ManyToOne(() => Page, (page) => page.pageDetails)
  @JoinColumn({ name: "page_id" })
  page!: Page;
}
