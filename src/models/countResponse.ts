/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema';

export interface CountResponse {
  count?: number;
  [key: string]: unknown;
}

export const countResponseSchema: Schema<CountResponse> = expandoObject({
  count: ['count', optional(number())],
});
