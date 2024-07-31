import { Entity, Column, PrimaryGeneratedColumn, Index } from "typeorm";

export enum TypeElementEnum {
  HEADER = "header",
  BODY = "body",
  FOOTER = "footer",
}

@Entity({ name: "element", schema: "public" })
export class Element {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index({ unique: true })
  @Column({
    name: "name",
    type: "varchar",
    unique: true,
    length: 100,
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
    name: "icon",
    type: "varchar",
    nullable: false,
  })
  icon!: string;

  @Column({
    name: "css",
    type: "varchar",
    nullable: false,
  })
  css!: string;

  @Column({
    name: "config",
    type: "json",
    nullable: false,
  })
  config!: { [key: string]: any };

  @Column({
    name: "text",
    type: "json",
    nullable: false,
  })
  text!: { [key: string]: any };

  @Column({
    name: "type",
    type: "json",
    nullable: true,
  })
  type!: TypeElementEnum[];

  @Column({
    name: "status",
    type: "boolean",
    nullable: false,
    default: true,
  })
  status!: boolean;
}
