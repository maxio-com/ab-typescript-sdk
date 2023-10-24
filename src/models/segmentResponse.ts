/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Segment, segmentSchema } from './segment';

export interface SegmentResponse {
  segment?: Segment;
}

export const segmentResponseSchema: Schema<SegmentResponse> = object({
  segment: ['segment', optional(lazy(() => segmentSchema))],
});
