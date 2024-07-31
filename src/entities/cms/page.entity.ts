import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  Unique,
} from "typeorm";
import { Micrositie, PageDetail, Sitie } from "../public-api";

export enum ModeEnum {
  EDIT = "edit",
  PUBLISH = "publish",
  REVIEW = "review",
}

@Entity({ name: "page", schema: "public" })
@Unique(["path", "micrositieId"])
export class Page {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: "name",
    type: "varchar",
    nullable: false,
  })
  name!: string;

  @Column({
    name: "path",
    type: "varchar",
    nullable: false,
  })
  path!: string;

  @Column({
    name: "mongo_id",
    type: "varchar",
    nullable: false,
  })
  mongoId!: string;

  @Column({
    name: "is_home_page",
    type: "boolean",
    nullable: false,
    default: false,
  })
  isHomePage!: boolean;

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

  @Column({
    name: "mode",
    type: "enum",
    enum: ModeEnum,
    default: ModeEnum.REVIEW,
    nullable: false,
  })
  mode!: ModeEnum;

  @Column({
    name: "micrositie_id",
    type: "int",
    nullable: true,
  })
  micrositieId!: number;

  @OneToMany(() => PageDetail, (pageDetail) => pageDetail.page)
  pageDetails!: PageDetail[];

  @ManyToOne(() => Sitie, (sitie) => sitie.pages)
  @JoinColumn({ name: "sitie_id" })
  sitie!: Sitie;

  @ManyToOne(() => Micrositie, (micrositie) => micrositie.pages)
  @JoinColumn({ name: "micrositie_id" })
  micrositie!: Micrositie;
}
