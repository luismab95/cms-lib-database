import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "file", schema: "public" })
export class File {
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
    name: "mime_type",
    type: "varchar",
    nullable: false,
  })
  mimeType!: string;

  @Column({
    name: "path",
    type: "varchar",
    nullable: false,
  })
  path!: string;

  @Column({
    name: "filename",
    type: "varchar",
    nullable: false,
  })
  filename!: string;

  @Column({
    name: "size",
    type: "int",
    nullable: false,
  })
  size!: number;

  @Column({
    name: "status",
    type: "boolean",
    nullable: false,
    default: true,
  })
  status!: boolean;
}
