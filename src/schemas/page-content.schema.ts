import { Schema } from 'mongoose';

const ChildrenSchema = new Schema(
  {
    uuid: {
      type: String,
    },
    slot: {
      type: String,
    },
  },
  { _id: false },
);

const ElementSchema = new Schema(
  {
    uuid: {
      type: String,
    },
    css: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    config: {
      type: Map,
      of: Schema.Types.Mixed,
      default: {},
    },
    text: {
      type: Map,
      of: Schema.Types.Mixed,
      default: {},
    },
    childrenSchema: {
      type: Array,
      of: ChildrenSchema,
      default: [],
    },
  },
  { _id: false },
);

ElementSchema.add({
  childrens: {
    type: Array,
    of: ElementSchema,
    default: [],
  },
});

const ColumnSchema = new Schema(
  {
    uuid: {
      type: String,
    },
    css: {
      type: String,
      default: '',
    },
    config: {
      type: Map,
      of: Schema.Types.Mixed,
      default: {},
    },
    element: {
      type: ElementSchema,
      default: {},
    },
  },
  { _id: false },
);

const RowSchema = new Schema(
  {
    uuid: {
      type: String,
    },
    css: {
      type: String,
      default: '',
    },
    config: {
      type: Map,
      of: Schema.Types.Mixed,
      default: {},
    },
    columns: {
      type: Array,
      of: ColumnSchema,
      default: [],
    },
  },
  { _id: false },
);

export const DataPageElementSchema = new Schema(
  {
    uuid: {
      type: String,
    },
    css: {
      type: String,
      default: '',
    },
    config: {
      type: Map,
      of: Schema.Types.Mixed,
      default: {},
    },
    rows: {
      type: Array,
      of: RowSchema,
      default: [],
    },
  },
  { _id: false },
);

export const PageContentSchema = new Schema({
  data: {
    type: DataPageElementSchema,
    default: [],
  },
});
