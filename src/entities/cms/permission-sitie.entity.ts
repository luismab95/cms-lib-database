import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Unique,
  Relation,
} from 'typeorm';
import { User } from '../security/user.entity.js';
import { Sitie } from './sitie.entity.js';
import { Micrositie } from './micrositie.entity.js';

@Entity({ name: 'permission-sitie', schema: 'public' })
@Unique(['userId', 'micrositieId', 'sitieId'])
export class PermissionSitie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    name: 'user_id',
    type: 'int',
    nullable: false,
  })
  userId: number;

  @Column({
    name: 'sitie_id',
    type: 'int',
    nullable: true,
  })
  sitieId: number;

  @Column({
    name: 'micrositie_id',
    type: 'int',
    nullable: true,
  })
  micrositieId: number;

  @Column({
    name: 'status',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  status: boolean;

  @ManyToOne(() => User, (user: User) => user.permissionSities)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;

  @ManyToOne(() => Sitie, (sitie: Sitie) => sitie.permissionSities)
  @JoinColumn({ name: 'sitie_id' })
  sitie: Relation<Sitie>;

  @ManyToOne(
    () => Micrositie,
    (micrositie: Micrositie) => micrositie.permissionSities,
  )
  @JoinColumn({ name: 'micrositie_id' })
  micrositie: Relation<Micrositie>;
}
