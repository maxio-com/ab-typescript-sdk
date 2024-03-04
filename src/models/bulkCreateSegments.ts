/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import { CreateSegment, createSegmentSchema } from './createSegment';

export interface BulkCreateSegments {
  segments?: CreateSegment[];
  [key: string]: unknown;
}

export const bulkCreateSegmentsSchema: Schema<BulkCreateSegments> = expandoObject(
  { segments: ['segments', optional(array(lazy(() => createSegmentSchema)))] }
);
