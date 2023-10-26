/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

export interface CountResponse {
  count?: number;
}

export const countResponseSchema: Schema<CountResponse> = object({
  count: ['count', optional(number())],
});
