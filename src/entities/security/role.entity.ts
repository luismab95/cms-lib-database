import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Relation,
} from 'typeorm';
import { Permission } from './permission.entity.js';
import { MenuRole } from './menu-rol.entity.js';
import { User } from './user.entity.js';

@Entity({ name: 'role', schema: 'security' })
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({
    name: 'code',
    type: 'varchar',
    unique: true,
    length: 100,
    nullable: false,
  })
  code: string;

  @Index({ unique: true })
  @Column({
    name: 'name',
    type: 'varchar',
    unique: true,
    length: 100,
    nullable: false,
  })
  name: string;

  @Column({
    name: 'description',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  description: string;

  @Column({
    name: 'status',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  status: boolean;

  @Column({
    name: 'permission_id',
    type: 'int',
    nullable: false,
  })
  permissionId: number;

  @ManyToOne(() => Permission, (permission: Permission) => permission.roles)
  @JoinColumn({ name: 'permission_id' })
  permission: Relation<Permission>;

  @OneToMany(() => MenuRole, (menuRole: MenuRole) => menuRole.role)
  menuRoles: Relation<MenuRole[]>;

  @OneToMany(() => User, (user: User) => user.role)
  users: Relation<User[]>;
}
