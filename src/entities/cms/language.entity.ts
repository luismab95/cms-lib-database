import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  Relation,
} from 'typeorm';
import { Sitie } from './sitie.entity.js';
import { Reference } from './reference.entity.js';

@Entity({ name: 'language', schema: 'public' })
export class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({
    name: 'lang',
    type: 'varchar',
    nullable: false,
  })
  lang: string;

  @Column({
    name: 'name',
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'icon',
    type: 'varchar',
    nullable: false,
  })
  icon: string;

  @Column({
    name: 'status',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  status: boolean;

  @Column({
    name: 'sitie_id',
    type: 'int',
    nullable: false,
  })
  sitieId: number;

  @ManyToOne(() => Sitie, (sitie: Sitie) => sitie.languages)
  @JoinColumn({ name: 'sitie_id' })
  sitie: Relation<Sitie>;

  @OneToMany(() => Reference, (reference: Reference) => reference.language)
  references: Relation<Reference[]>;
}
