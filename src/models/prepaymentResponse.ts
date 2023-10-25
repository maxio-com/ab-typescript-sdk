/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Prepayment1, prepayment1Schema } from './prepayment1';

export interface PrepaymentResponse {
  prepayment: Prepayment1;
}

export const prepaymentResponseSchema: Schema<PrepaymentResponse> = object({
  prepayment: ['prepayment', lazy(() => prepayment1Schema)],
});
