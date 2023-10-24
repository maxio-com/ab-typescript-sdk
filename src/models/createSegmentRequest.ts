/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { CreateSegment, createSegmentSchema } from './createSegment';

export interface CreateSegmentRequest {
  segment: CreateSegment;
}

export const createSegmentRequestSchema: Schema<CreateSegmentRequest> = object({
  segment: ['segment', lazy(() => createSegmentSchema)],
});
