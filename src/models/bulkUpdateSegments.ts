/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema.js';
import {
  BulkUpdateSegmentsItem,
  bulkUpdateSegmentsItemSchema,
} from './bulkUpdateSegmentsItem.js';

export interface BulkUpdateSegments {
  segments?: BulkUpdateSegmentsItem[];
  [key: string]: unknown;
}

export const bulkUpdateSegmentsSchema: Schema<BulkUpdateSegments> = lazy(() =>
  expandoObject({
    segments: ['segments', optional(array(bulkUpdateSegmentsItemSchema))],
  })
);
