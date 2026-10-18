import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Relation } from 'typeorm';
import { ScopeI } from '@shared/interfaces/scope.interface.js';
import { Role } from './role.entity.js';


@Entity({ name: 'permission', schema: 'security' })
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'description',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  description: string;

  @Column({
    name: 'scope',
    type: 'json',
    nullable: false,
  })
  scope: ScopeI[];

  @Column({
    name: 'status',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  status: boolean;

  @OneToMany(() => Role, (role: Role) => role.permission)
  roles: Relation<Role[]>;
}
