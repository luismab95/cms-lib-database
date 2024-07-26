import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Reference, Sitie } from "../public-api";

@Entity({ name: "language", schema: "public" })
export class Language {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index({ unique: true })
  @Column({
    name: "lang",
    type: "varchar",
    nullable: false,
  })
  lang!: string;

  @Column({
    name: "name",
    type: "varchar",
    nullable: false,
  })
  name!: string;

  @Column({
    name: "icon",
    type: "varchar",
    nullable: false,
  })
  icon!: string;

  @Column({
    name: "status",
    type: "boolean",
    nullable: false,
    default: true,
  })
  status!: boolean;

  @Column({
    name: "sitie_id",
    type: "int",
    nullable: false,
  })
  sitieId!: number;

  @ManyToOne(() => Sitie, (sitie) => sitie.languages)
  @JoinColumn({ name: "sitie_id" })
  sitie!: Sitie;

  @OneToMany(() => Reference, (reference) => reference.language)
  references!: Reference[];
}
