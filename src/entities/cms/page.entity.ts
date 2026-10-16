import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  Unique,
  Relation,
} from 'typeorm';
import { PageDetail } from './page_detail.entity.js';
import { PageReview } from './page_review.entity.js';
import { Sitie } from './sitie.entity.js';
import { Micrositie } from './micrositie.entity.js';
import { ReferenceReview } from './reference_review.entity.js';
import { Reference } from './reference.entity.js';

@Entity({ name: 'page', schema: 'public' })
@Unique(['path', 'micrositieId'])
export class Page {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'path',
    type: 'varchar',
    nullable: false,
  })
  path: string;

  @Column({
    name: 'mongo_id',
    type: 'varchar',
    nullable: false,
  })
  mongoId: string;

  @Column({
    name: 'is_home_page',
    type: 'boolean',
    nullable: false,
    default: false,
  })
  isHomePage: boolean;

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
    name: 'micrositie_id',
    type: 'int',
    nullable: true,
  })
  micrositieId: number;

  @OneToMany(() => PageDetail, (pageDetail: PageDetail) => pageDetail.page)
  pageDetails: Relation<PageDetail[]>;

  @OneToMany(() => PageReview, (pageReview: PageReview) => pageReview.page)
  pageReviews: Relation<PageReview[]>;

  @ManyToOne(() => Sitie, (sitie: Sitie) => sitie.pages)
  @JoinColumn({ name: 'sitie_id' })
  sitie: Relation<Sitie>;

  @ManyToOne(() => Micrositie, (micrositie: Micrositie) => micrositie.pages)
  @JoinColumn({ name: 'micrositie_id' })
  micrositie: Relation<Micrositie>;

  @OneToMany(
    () => ReferenceReview,
    (referenceReview: ReferenceReview) => referenceReview.referenceReview,
  )
  references: Relation<ReferenceReview[]>;

  @OneToMany(() => Reference, (reference: Reference) => reference.reference)
  referencesC: Relation<Reference[]>;
}
