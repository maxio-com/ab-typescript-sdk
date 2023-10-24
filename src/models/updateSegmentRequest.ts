/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { UpdateSegment, updateSegmentSchema } from './updateSegment';

export interface UpdateSegmentRequest {
  segment: UpdateSegment;
}

export const updateSegmentRequestSchema: Schema<UpdateSegmentRequest> = object({
  segment: ['segment', lazy(() => updateSegmentSchema)],
});
