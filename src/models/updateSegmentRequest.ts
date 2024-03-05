/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { UpdateSegment, updateSegmentSchema } from './updateSegment';

export interface UpdateSegmentRequest {
  segment: UpdateSegment;
  [key: string]: unknown;
}

export const updateSegmentRequestSchema: Schema<UpdateSegmentRequest> = expandoObject(
  { segment: ['segment', lazy(() => updateSegmentSchema)] }
);
