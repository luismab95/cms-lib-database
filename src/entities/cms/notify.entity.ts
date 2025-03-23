import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Role } from "../public-api";

@Entity({ name: "notify", schema: "public" })
export class Notify {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: "message",
    type: "text",
    nullable: false,
  })
  message!: string;

  @Column({
    name: "path",
    type: "varchar",
    length: 255,
    nullable: false,
  })
  path!: string;

  @Column({
    name: "metadata",
    type: "json",
    nullable: false,
  })
  metadata!: { [key: string]: any };

  @Column({
    name: "read_status",
    type: "boolean",
    nullable: false,
    default: true,
  })
  readStatus!: boolean;

  @Column({
    name: "role_id",
    type: "int",
    nullable: false,
  })
  roleId!: number;

  @ManyToOne(() => Role, (role) => role.notifies)
  @JoinColumn({ name: "role_id" })
  role!: Role;
}
