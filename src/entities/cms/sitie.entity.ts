import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Language, Micrositie, Page, Template } from "../public-api";

@Entity({ name: "sitie", schema: "public" })
export class Sitie {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: "name",
    type: "varchar",
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

  @Column({
    name: "domain",
    type: "varchar",
    nullable: false,
  })
  domain!: string;

  @Column({
    name: "status",
    type: "boolean",
    nullable: false,
    default: true,
  })
  status!: boolean;

  @Column({
    name: "maintenance",
    type: "boolean",
    nullable: false,
    default: true,
  })
  maintenance!: boolean;

  @Column({
    name: "template_id",
    type: "int",
    nullable: false,
  })
  templateId!: number;

  @OneToMany(() => Language, (language) => language.sitie)
  languages!: Language[];

  @OneToMany(() => Micrositie, (micrositie) => micrositie.sitie)
  microsities!: Micrositie[];

  @ManyToOne(() => Template, (template) => template.sities)
  @JoinColumn({ name: "template_id" })
  template!: Template;

  @OneToMany(() => Page, (page) => page.sitie)
  pages!: Page[];
}
