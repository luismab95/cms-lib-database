import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MenuRole, Module } from "../public-api";

@Entity({ name: "menu", schema: "security" })
export class Menu {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: "name",
    type: "varchar",
    unique: true,
    length: 100,
    nullable: false,
  })
  name!: string;

  @Index({ unique: true })
  @Column({
    name: "path",
    type: "varchar",
    unique: true,
    nullable: false,
  })
  path!: string;

  @Column({
    name: "icon",
    type: "varchar",
    length: 255,
    nullable: false,
  })
  icon!: string;

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
    name: "module_id",
    type: "int",
    nullable: false,
  })
  moduleId!: number;

  @OneToMany(() => MenuRole, (menuRole) => menuRole.menu)
  menuRoles!: MenuRole[];

  @ManyToOne(() => Module, (module) => module.menu)
  @JoinColumn({ name: "module_id" })
  module!: Module;
}
