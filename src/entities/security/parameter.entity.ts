import { Entity, Column, PrimaryGeneratedColumn, Index } from "typeorm";

@Entity({ name: "parameter", schema: "security" })
export class Parameter {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index({ unique: true })
  @Column({
    name: "code",
    type: "varchar",
    unique: true,
    length: 100,
    nullable: false,
  })
  code!: string;

  @Column({
    name: "name",
    type: "varchar",
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
    name: "value",
    type: "varchar",
    length: 255,
    nullable: false,
  })
  value!: string;

  @Column({
    name: "private",
    type: "boolean",
    nullable: false,
    default: false,
  })
  private!: boolean;
}
