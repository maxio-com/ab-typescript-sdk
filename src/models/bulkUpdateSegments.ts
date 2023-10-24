/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  BulkUpdateSegmentsItem,
  bulkUpdateSegmentsItemSchema,
} from './bulkUpdateSegmentsItem';

export interface BulkUpdateSegments {
  segments?: BulkUpdateSegmentsItem[];
}

export const bulkUpdateSegmentsSchema: Schema<BulkUpdateSegments> = object({
  segments: [
    'segments',
    optional(array(lazy(() => bulkUpdateSegmentsItemSchema))),
  ],
});
