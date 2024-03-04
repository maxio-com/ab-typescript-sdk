/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { Prepayment, prepaymentSchema } from './prepayment';

export interface PrepaymentResponse {
  prepayment: Prepayment;
  [key: string]: unknown;
}

export const prepaymentResponseSchema: Schema<PrepaymentResponse> = expandoObject(
  { prepayment: ['prepayment', lazy(() => prepaymentSchema)] }
);
