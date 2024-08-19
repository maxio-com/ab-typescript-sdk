/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface CustomerError {
  customer?: string;
  [key: string]: unknown;
}

export const customerErrorSchema: Schema<CustomerError> = expandoObject({
  customer: ['customer', optional(string())],
});
