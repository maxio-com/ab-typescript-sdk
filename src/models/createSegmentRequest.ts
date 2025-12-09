/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { CreateSegment, createSegmentSchema } from './createSegment.js';

export interface CreateSegmentRequest {
  segment: CreateSegment;
  [key: string]: unknown;
}

export const createSegmentRequestSchema: Schema<CreateSegmentRequest> = lazy(
  () => expandoObject({ segment: ['segment', createSegmentSchema] })
);
