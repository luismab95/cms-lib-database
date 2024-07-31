import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  Unique,
} from "typeorm";
import { Language } from "../public-api";

@Entity({ name: "reference", schema: "public" })
@Unique(["ref", "languageId"])
export class Reference {
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

  @ManyToOne(() => Language, (language) => language.references)
  @JoinColumn({ name: "language_id" })
  language!: Language;
}
