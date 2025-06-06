import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  Unique,
} from "typeorm";
import { Language, Page } from "../public-api";

@Entity({ name: "reference_review", schema: "public" })
@Unique(["ref", "languageId","pageId"])
export class ReferenceReview {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: "ref",
    type: "varchar",
    nullable: false,
  })
  ref!: string;

  @Column({
    name: "text",
    type: "text",
    nullable: false,
  })
  text!: string;

  @Column({
    name: "status",
    type: "boolean",
    nullable: false,
    default: true,
  })
  status!: boolean;

  @Column({
    name: "language_id",
    type: "int",
    nullable: false,
  })
  languageId!: number;

  @Column({
    name: "page_id",
    type: "int",
    nullable: false,
  })
  pageId!: number;

  @ManyToOne(() => Language, (language) => language.references)
  @JoinColumn({ name: "language_id" })
  language!: Language;

  @ManyToOne(() => Page, (page) => page.references)
  @JoinColumn({ name: "page_id" })
  referenceReview!: Page;
}
