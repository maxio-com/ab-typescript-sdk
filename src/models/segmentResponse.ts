/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import { Segment, segmentSchema } from './segment.js';

export interface SegmentResponse {
  segment?: Segment;
  [key: string]: unknown;
}

export const segmentResponseSchema: Schema<SegmentResponse> = lazy(() =>
  expandoObject({ segment: ['segment', optional(segmentSchema)] })
);
