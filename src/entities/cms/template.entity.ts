import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
  Relation,
} from 'typeorm';
import { Sitie } from './sitie.entity.js';
import { Micrositie } from './micrositie.entity.js';
import { PageReview } from './page_review.entity.js';
import { ReferenceReview } from './reference_review.entity.js';
import { Reference } from './reference.entity.js';

@Entity({ name: 'template', schema: 'public' })
export class Template {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
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
    name: 'mongo_id',
    type: 'varchar',
    nullable: false,
  })
  mongoId: string;

  @Column({
    name: 'status',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  status: boolean;

  @OneToMany(() => Sitie, (sitie: Sitie) => sitie.template)
  sities: Relation<Sitie[]>;

  @OneToMany(() => Micrositie, (micrositie: Micrositie) => micrositie.template)
  microsities: Relation<Sitie[]>;

  @OneToMany(() => PageReview, (pageReview: PageReview) => pageReview.template)
  pageReviews: Relation<PageReview[]>;

  @OneToMany(
    () => ReferenceReview,
    (referenceReview: ReferenceReview) =>
      referenceReview.referenceTemplateReview,
  )
  references: Relation<ReferenceReview[]>;

  @OneToMany(
    () => Reference,
    (reference: Reference) => reference.referenceTemplate,
  )
  referencesC: Relation<Reference[]>;
}
