export type ElementKindT = 'simple' | 'composite';

export interface ChildrenSchemaI {
  slot: string;
  elementId: number;
  style: { [key: string]: string };
  childrens: ChildrenSchemaI[];
}
