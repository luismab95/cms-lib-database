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
import { PermissionSitie } from './permission-sitie.entity.js';
import { Page } from './page.entity.js';
import { Sitie } from './sitie.entity.js';
import { Template } from './template.entity.js';

@Entity({ name: 'micrositie', schema: 'public' })
export class Micrositie {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({
    name: 'name',
    type: 'varchar',
    unique: true,
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

  @Index({ unique: true })
  @Column({
    name: 'path',
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  path: string;

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

  @Column({
    name: 'template_id',
    type: 'int',
    nullable: false,
  })
  templateId: number;

  @ManyToOne(() => Template, (template: Template) => template.microsities)
  @JoinColumn({ name: 'template_id' })
  template: Relation<Template>;

  @ManyToOne(() => Sitie, (sitie: Sitie) => sitie.microsities)
  @JoinColumn({ name: 'sitie_id' })
  sitie: Relation<Sitie>;

  @OneToMany(() => Page, (page: Page) => page.micrositie)
  pages: Relation<Page[]>;

  @OneToMany(
    () => PermissionSitie,
    (permissionSitie: PermissionSitie) => permissionSitie.micrositie,
  )
  permissionSities: Relation<PermissionSitie[]>;
}
