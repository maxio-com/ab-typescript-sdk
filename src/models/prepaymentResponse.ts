/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Prepayment, prepaymentSchema } from './prepayment';

export interface PrepaymentResponse {
  prepayment: Prepayment;
}

export const prepaymentResponseSchema: Schema<PrepaymentResponse> = object({
  prepayment: ['prepayment', lazy(() => prepaymentSchema)],
});
