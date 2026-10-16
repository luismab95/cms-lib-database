import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  Relation,
} from 'typeorm';
import { PermissionSitie } from './permission-sitie.entity.js';
import { Page } from './page.entity.js';
import { Template } from './template.entity.js';
import { Micrositie } from './micrositie.entity.js';
import { Language } from './language.entity.js';

@Entity({ name: 'sitie', schema: 'public' })
export class Sitie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
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
    name: 'domain',
    type: 'varchar',
    nullable: false,
  })
  domain: string;

  @Column({
    name: 'status',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  status: boolean;

  @Column({
    name: 'maintenance',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  maintenance: boolean;

  @Column({
    name: 'template_id',
    type: 'int',
    nullable: false,
  })
  templateId: number;

  @OneToMany(() => Language, (language: Language) => language.sitie)
  languages: Relation<Language[]>;

  @OneToMany(() => Micrositie, (micrositie: Micrositie) => micrositie.sitie)
  microsities: Relation<Micrositie[]>;

  @ManyToOne(() => Template, (template: Template) => template.sities)
  @JoinColumn({ name: 'template_id' })
  template: Relation<Template>;

  @OneToMany(() => Page, (page: Page) => page.sitie)
  pages: Relation<Page[]>;

  @OneToMany(
    () => PermissionSitie,
    (permissionSitie: PermissionSitie) => permissionSitie.sitie,
  )
  permissionSities: Relation<PermissionSitie[]>;
}
