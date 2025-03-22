import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { LoginAttempt, OtpUser, PageReview, Role, Session } from "../public-api";

@Entity({ name: "user", schema: "security" })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index({ unique: true })
  @Column({
    name: "email",
    type: "varchar",
    unique: true,
    length: 100,
    nullable: false,
  })
  email!: string;

  @Column({ name: "password", nullable: false, type: "text" })
  password!: string;

  @Column({
    name: "firstname",
    type: "varchar",
    length: 255,
    nullable: false,
  })
  firstname!: string;

  @Column({
    name: "lastname",
    type: "varchar",
    length: 255,
    nullable: false,
  })
  lastname!: string;

  @Column({
    name: "status",
    type: "boolean",
    nullable: false,
    default: true,
  })
  status!: boolean;

  @Column({
    name: "terms",
    type: "boolean",
    nullable: false,
    default: false,
  })
  terms!: boolean;

  @Column({
    name: "two_factor_auth",
    type: "boolean",
    nullable: false,
    default: false,
  })
  twoFactorAuth!: boolean;

  @Column({
    name: "bloqued",
    type: "boolean",
    nullable: false,
    default: false,
  })
  bloqued!: boolean;

  @Column({
    name: "role_id",
    type: "int",
    nullable: false,
  })
  roleId!: number;

  @OneToMany(() => Session, (sessions) => sessions.user)
  sessions!: Session[];

  @OneToMany(() => LoginAttempt, (loginAttempt) => loginAttempt.user)
  loginAttempts!: LoginAttempt[];

  @OneToMany(() => OtpUser, (otpUser) => otpUser.user)
  otpUsers!: OtpUser[];

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: "role_id" })
  role!: Role;

  @OneToMany(() => PageReview, (pageReview) => pageReview.user)
  pageReviews!: PageReview[];
}
