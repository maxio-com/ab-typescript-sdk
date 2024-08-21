/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { MRR, mRRSchema } from './mRR';

export interface MRRResponse {
  mrr: MRR;
  [key: string]: unknown;
}

export const mRRResponseSchema: Schema<MRRResponse> = expandoObject({
  mrr: ['mrr', lazy(() => mRRSchema)],
});
