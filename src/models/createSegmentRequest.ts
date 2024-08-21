/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { CreateSegment, createSegmentSchema } from './createSegment';

export interface CreateSegmentRequest {
  segment: CreateSegment;
  [key: string]: unknown;
}

export const createSegmentRequestSchema: Schema<CreateSegmentRequest> = expandoObject(
  { segment: ['segment', lazy(() => createSegmentSchema)] }
);
