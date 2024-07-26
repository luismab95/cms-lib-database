import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../public-api";

@Entity({ name: "login_attempt", schema: "security" })
export class LoginAttempt {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: "attempt",
    type: "int",
    nullable: false,
  })
  attempt!: number;

  @Column({
    name: "user_id",
    type: "int",
    nullable: false,
  })
  userId!: number;

  @Column({
    name: "status",
    type: "boolean",
    nullable: false,
    default: true,
  })
  status!: boolean;

  @ManyToOne(() => User, (user) => user.loginAttempts)
  @JoinColumn({ name: "user_id" })
  user!: User;
}
