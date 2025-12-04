/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema.js';
import { Prepayment, prepaymentSchema } from './prepayment.js';

export interface PrepaymentsResponse {
  prepayments?: Prepayment[];
  [key: string]: unknown;
}

export const prepaymentsResponseSchema: Schema<PrepaymentsResponse> = lazy(() =>
  expandoObject({
    prepayments: ['prepayments', optional(array(prepaymentSchema))],
  })
);
