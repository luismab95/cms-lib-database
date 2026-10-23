export type PageReviewStatus = 'pending' | 'assigned' | 'approved' | 'rejected';
export type TypeReviewItemT =
  'section' | 'row' | 'column' | 'element' | 'body' | 'header' | 'footer';

export interface ReviewCommentI {
  type: TypeReviewItemT;
  uuid: string;
  comment: string;
}
