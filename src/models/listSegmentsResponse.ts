/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Segment, segmentSchema } from './segment';

export interface ListSegmentsResponse {
  segments?: Segment[];
}

export const listSegmentsResponseSchema: Schema<ListSegmentsResponse> = object({
  segments: ['segments', optional(array(lazy(() => segmentSchema)))],
});
