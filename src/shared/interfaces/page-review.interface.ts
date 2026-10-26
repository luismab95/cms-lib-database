export type PageReviewStatusT = 'pending' | 'assigned' | 'approved' | 'rejected';
export type TypeReviewItemT =
  'section' | 'row' | 'column' | 'element' | 'body' | 'header' | 'footer';

export type TypeReviewT = 'template' | 'page';

export interface ReviewCommentI {
  type: TypeReviewItemT;
  uuid: string;
  comment: string;
}
