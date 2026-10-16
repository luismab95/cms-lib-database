import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Unique,
  Relation,
} from 'typeorm';
import { Menu } from './menu.entity.js';
import { Role } from './role.entity.js';

@Entity({ name: 'menu_rol', schema: 'security' })
@Unique(['menuId', 'roleId'])
export class MenuRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'menu_id',
    type: 'int',
    nullable: false,
  })
  menuId: number;

  @Column({
    name: 'role_id',
    type: 'int',
    nullable: false,
  })
  roleId: number;

  @Column({
    name: 'order',
    type: 'int',
    nullable: false,
  })
  order: number;

  @Column({
    name: 'status',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  status: boolean;

  @ManyToOne(() => Menu, (menu: Menu) => menu.menuRoles)
  @JoinColumn({ name: 'menu_id' })
  menu: Relation<Menu>;

  @ManyToOne(() => Role, (role: Menu) => role.menuRoles)
  @JoinColumn({ name: 'role_id' })
  role: Relation<Role>;
}
