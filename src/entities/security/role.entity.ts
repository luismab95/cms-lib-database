import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { MenuRole, Notify, Permission, User } from "../public-api";

@Entity({ name: "role", schema: "security" })
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index({ unique: true })
  @Column({
    name: "name",
    type: "varchar",
    unique: true,
    length: 100,
    nullable: false,
  })
  name!: string;

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
    name: "permission_id",
    type: "int",
    nullable: false,
  })
  permissionId!: number;

  @ManyToOne(() => Permission, (permission) => permission.roles)
  @JoinColumn({ name: "permission_id" })
  permission!: Permission;

  @OneToMany(() => MenuRole, (menuRole) => menuRole.role)
  menuRoles!: MenuRole[];

  @OneToMany(() => User, (user) => user.role)
  users!: User[];

  @OneToMany(() => Notify, (notify) => notify.role)
  notifies!: Notify[];
}
