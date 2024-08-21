/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import { Prepayment, prepaymentSchema } from './prepayment';

export interface PrepaymentsResponse {
  prepayments?: Prepayment[];
  [key: string]: unknown;
}

export const prepaymentsResponseSchema: Schema<PrepaymentsResponse> = expandoObject(
  {
    prepayments: ['prepayments', optional(array(lazy(() => prepaymentSchema)))],
  }
);
