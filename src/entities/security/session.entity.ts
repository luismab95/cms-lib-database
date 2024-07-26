import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../public-api";

@Entity({ name: "session", schema: "security" })
export class Session {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: "ip_address",
    type: "varchar",
    length: 255,
    nullable: false,
  })
  ipAddress!: string;

  @Column({
    name: "token",
    type: "text",
    nullable: false,
  })
  token!: string;

  @Column({
    name: "info",
    type: "text",
    nullable: false,
  })
  info!: string;

  @Column({
    name: "active",
    type: "boolean",
    nullable: false,
    default: true,
  })
  active!: boolean;

  @Column({
    name: "user_id",
    type: "int",
    nullable: false,
  })
  userId!: number;

  @ManyToOne(() => User, (user) => user.sessions)
  @JoinColumn({ name: "user_id" })
  user!: User;
}
