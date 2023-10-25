/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Prepayment1, prepayment1Schema } from './prepayment1';

export interface PrepaymentsResponse {
  prepayments?: Prepayment1[];
}

export const prepaymentsResponseSchema: Schema<PrepaymentsResponse> = object({
  prepayments: ['prepayments', optional(array(lazy(() => prepayment1Schema)))],
});
