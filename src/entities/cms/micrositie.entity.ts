import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Page, Sitie } from "../public-api";

@Entity({ name: "micrositie", schema: "public" })
export class Micrositie {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index({ unique: true })
  @Column({
    name: "name",
    type: "varchar",
    unique: true,
    nullable: false,
  })
  name!: string;

  @Column({
    name: "description",
    type: "varchar",
    length: 255,
    nullable: false,
  })
  description!: string;

  @Index({ unique: true })
  @Column({
    name: "path",
    type: "varchar",
    unique: true,
    nullable: false,
  })
  path!: string;

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

  @ManyToOne(() => Sitie, (sitie) => sitie.microsities)
  @JoinColumn({ name: "sitie_id" })
  sitie!: Sitie;

  @OneToMany(() => Page, (page) => page.micrositie)
  pages!: Page[];
}
