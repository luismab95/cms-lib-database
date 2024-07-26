import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Role } from "./role.entity";

export interface ScopeInterface {
  effect: "Allow" | "Denny";
  action: string[];
}

@Entity({ name: "permission", schema: "security" })
export class Permission {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: "description",
    type: "varchar",
    length: 255,
    nullable: false,
  })
  description!: string;

  @Column({
    name: "scope",
    type: "json",
    nullable: false,
  })
  scope!: ScopeInterface[];

  @Column({
    name: "status",
    type: "boolean",
    nullable: false,
    default: true,
  })
  status!: boolean;

  @OneToMany(() => Role, (role) => role.permission)
  roles!: Role[];
}
