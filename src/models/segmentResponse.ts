/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { Segment, segmentSchema } from './segment';

export interface SegmentResponse {
  segment?: Segment;
  [key: string]: unknown;
}

export const segmentResponseSchema: Schema<SegmentResponse> = expandoObject({
  segment: ['segment', optional(lazy(() => segmentSchema))],
});
