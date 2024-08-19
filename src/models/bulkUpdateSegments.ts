/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import {
  BulkUpdateSegmentsItem,
  bulkUpdateSegmentsItemSchema,
} from './bulkUpdateSegmentsItem';

export interface BulkUpdateSegments {
  segments?: BulkUpdateSegmentsItem[];
  [key: string]: unknown;
}

export const bulkUpdateSegmentsSchema: Schema<BulkUpdateSegments> = expandoObject(
  {
    segments: [
      'segments',
      optional(array(lazy(() => bulkUpdateSegmentsItemSchema))),
    ],
  }
);
