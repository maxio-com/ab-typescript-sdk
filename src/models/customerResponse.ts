/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { Customer1, customer1Schema } from './customer1';

export interface CustomerResponse {
  customer: Customer1;
  [key: string]: unknown;
}

export const customerResponseSchema: Schema<CustomerResponse> = expandoObject({
  customer: ['customer', lazy(() => customer1Schema)],
});
