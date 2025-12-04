/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { Prepayment, prepaymentSchema } from './prepayment.js';

export interface PrepaymentResponse {
  prepayment: Prepayment;
  [key: string]: unknown;
}

export const prepaymentResponseSchema: Schema<PrepaymentResponse> = lazy(() =>
  expandoObject({ prepayment: ['prepayment', prepaymentSchema] })
);
