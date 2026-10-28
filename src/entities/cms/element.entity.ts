import {
  ChildrenSchemaI,
  ElementKindT,
} from '@shared/interfaces/element.interface.js';
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity({ name: 'element', schema: 'public' })
export class Element {
  @PrimaryGeneratedColumn()
  id: number;

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
    name: 'kind',
    type: 'varchar',
    nullable: false,
    default: 'simple',
  })
  kind: ElementKindT;

  @Column({
    name: 'icon',
    type: 'varchar',
    nullable: false,
  })
  icon: string;

  @Column({
    name: 'css',
    type: 'varchar',
    nullable: false,
  })
  css: string;

  @Column({
    name: 'config',
    type: 'json',
    nullable: false,
  })
  config: { [key: string]: any };

  @Column({
    name: 'text',
    type: 'json',
    nullable: false,
  })
  text: { [key: string]: any };

  @Column({
    name: 'type',
    type: 'json',
    nullable: true,
  })
  type: any[];

  @Column({
    name: 'children_schema',
    type: 'json',
    nullable: true,
    default: [],
  })
  childrenSchema: ChildrenSchemaI[];

  @Column({
    name: 'status',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  status: boolean;
}
