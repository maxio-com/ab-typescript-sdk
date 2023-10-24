/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { MRR, mRRSchema } from './mRR';

export interface MRRResponse {
  mrr: MRR;
}

export const mRRResponseSchema: Schema<MRRResponse> = object({
  mrr: ['mrr', lazy(() => mRRSchema)],
});
