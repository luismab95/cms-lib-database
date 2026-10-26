import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  Unique,
  Relation,
} from 'typeorm';
import { TypeReviewT } from '@shared/interfaces/page-review.interface.js';
import { Language } from './language.entity.js';
import { Page } from './page.entity.js';
import { Template } from './template.entity.js';

@Entity({ name: 'reference_review', schema: 'public' })
@Unique(['ref', 'languageId', 'pageId'])
export class ReferenceReview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'ref',
    type: 'varchar',
    nullable: false,
  })
  ref: string;

  @Column({
    name: 'text',
    type: 'text',
    nullable: false,
  })
  text: string;

  @Column({
    name: 'status',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  status: boolean;

  @Column({
    name: 'language_id',
    type: 'int',
    nullable: false,
  })
  languageId: number;

  @Column({
    name: 'page_id',
    type: 'int',
    nullable: true,
  })
  pageId: number;

  @Column({
    name: 'template_id',
    type: 'int',
    nullable: true,
  })
  templateId: number;

  @Column({
    name: 'type',
    type: 'varchar',
    nullable: false,
    default: 'page',
  })
  type: TypeReviewT;

  @ManyToOne(() => Language, (language: Language) => language.references)
  @JoinColumn({ name: 'language_id' })
  language: Relation<Language>;

  @ManyToOne(() => Page, (page: Page) => page.references)
  @JoinColumn({ name: 'page_id' })
  referencePageReview: Relation<Page>;

  @ManyToOne(() => Template, (template: Template) => template.references)
  @JoinColumn({ name: 'template_id' })
  referenceTemplateReview: Relation<Template>;
}
