import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
} from "typeorm";
import { Menu } from "./menu.entity";

@Entity({ name: "module", schema: "security" })
export class Module {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index({ unique: true })
  @Column({
    name: "name",
    type: "varchar",
    unique: true,
    length: 100,
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
    name: "status",
    type: "boolean",
    nullable: false,
    default: true,
  })
  status!: boolean;

  @Column({
    name: "icon",
    type: "varchar",
    length: 255,
    nullable: false,
  })
  icon!: string;

  @OneToMany(() => Menu, (menu) => menu.module)
  menu!: Menu[];
}
