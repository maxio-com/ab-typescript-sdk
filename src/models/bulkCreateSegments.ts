/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { CreateSegment, createSegmentSchema } from './createSegment';

export interface BulkCreateSegments {
  segments?: CreateSegment[];
}

export const bulkCreateSegmentsSchema: Schema<BulkCreateSegments> = object({
  segments: ['segments', optional(array(lazy(() => createSegmentSchema)))],
});
