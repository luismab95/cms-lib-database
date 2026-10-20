import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity({ name: 'initializer', schema: 'security' })
export class Initializer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'hash',
    type: 'varchar',
    unique: true,
    length: 16,
    nullable: false,
  })
  hash: string;

  @Column({
    name: 'user_pwd',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  userPwd: boolean;

  @Column({
    name: 'status',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  status: boolean;
}
