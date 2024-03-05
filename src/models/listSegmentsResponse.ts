/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import { Segment, segmentSchema } from './segment';

export interface ListSegmentsResponse {
  segments?: Segment[];
  [key: string]: unknown;
}

export const listSegmentsResponseSchema: Schema<ListSegmentsResponse> = expandoObject(
  { segments: ['segments', optional(array(lazy(() => segmentSchema)))] }
);
