import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
  JoinColumn,
  ManyToOne,
  Relation,
} from 'typeorm';
import { Session } from './session.entity.js';
import { LoginAttempt } from './login-attempt.entity.js';
import { PermissionSitie } from '../cms/permission-sitie.entity.js';
import { OtpUser } from './otp-user.entity.js';
import { Role } from './role.entity.js';
import { PageReview } from '../cms/page_review.entity.js';

@Entity({ name: 'user', schema: 'security' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({
    name: 'email',
    type: 'varchar',
    unique: true,
    length: 100,
    nullable: false,
  })
  email: string;

  @Column({ name: 'password', nullable: false, type: 'text' })
  password: string;

  @Column({
    name: 'firstname',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  firstname: string;

  @Column({
    name: 'lastname',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  lastname: string;

  @Column({
    name: 'status',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  status: boolean;

  @Column({
    name: 'terms',
    type: 'boolean',
    nullable: false,
    default: false,
  })
  terms: boolean;

  @Column({
    name: 'two_factor_auth',
    type: 'boolean',
    nullable: false,
    default: false,
  })
  twoFactorAuth: boolean;

  @Column({
    name: 'bloqued',
    type: 'boolean',
    nullable: false,
    default: false,
  })
  bloqued: boolean;

  @Column({
    name: 'role_id',
    type: 'int',
    nullable: false,
  })
  roleId: number;

  @OneToMany(() => Session, (sessions: Session) => sessions.user)
  sessions: Session[];

  @OneToMany(
    () => LoginAttempt,
    (loginAttempt: LoginAttempt) => loginAttempt.user,
  )
  loginAttempts: LoginAttempt[];

  @OneToMany(
    () => PermissionSitie,
    (permissionSitie: PermissionSitie) => permissionSitie.user,
  )
  permissionSities: PermissionSitie[];

  @OneToMany(() => OtpUser, (otpUser: OtpUser) => otpUser.user)
  otpUsers: OtpUser[];

  @ManyToOne(() => Role, (role: Role) => role.users)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @OneToMany(() => PageReview, (pageReview) => pageReview.user)
  pageReviews: Relation<PageReview[]>;
}
