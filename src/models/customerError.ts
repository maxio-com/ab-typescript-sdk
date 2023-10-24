/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface CustomerError {
  customer?: string;
}

export const customerErrorSchema: Schema<CustomerError> = object({
  customer: ['customer', optional(string())],
});
