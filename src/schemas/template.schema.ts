import { Schema } from 'mongoose';
import { DataPageElementSchema } from './page-content.schema.js';

const NestedObjectSchema = new Schema(
  {
    css: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      of: DataPageElementSchema,
      default: [],
    },
    config: {
      type: Map,
      of: Schema.Types.Mixed,
      default: {},
    },
  },
  { _id: false },
);

export const TemplateObjectSchema = new Schema(
  {
    header: {
      type: NestedObjectSchema,
      default: {},
    },
    footer: {
      type: NestedObjectSchema,
      default: {},
    },
  },
  { _id: false },
);

export const TemplateSchema = new Schema({
  data: {
    type: TemplateObjectSchema,
    default: {},
  },
});
