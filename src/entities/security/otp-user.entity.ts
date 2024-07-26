import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../public-api";

@Entity({ name: "opt_user", schema: "security" })
export class OtpUser {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: "otp",
    type: "varchar",
    nullable: false,
  })
  otp!: string;

  @Column({
    name: "used",
    type: "boolean",
    nullable: false,
    default: false,
  })
  used!: boolean;

  @Column({
    name: "type",
    type: "enum",
    enum: ["LOGIN", "RESET-PASSWORD"],
    comment: "Login de usuario, Recuperación de contraseña",
    nullable: false,
    default: "LOGIN",
  })
  type!: string;

  @Column({
    name: "user_id",
    type: "int",
    nullable: false,
  })
  userId!: number;

  @CreateDateColumn({ name: "created_at", type: "timestamp with time zone" })
  createdAt!: Date;

  @ManyToOne(() => User, (user) => user.otpUsers)
  @JoinColumn({ name: "user_id" })
  user!: User;
}
