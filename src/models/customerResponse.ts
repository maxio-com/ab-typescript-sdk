/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { Customer, customerSchema } from './customer.js';

export interface CustomerResponse {
  customer: Customer;
  [key: string]: unknown;
}

export const customerResponseSchema: Schema<CustomerResponse> = expandoObject({
  customer: ['customer', lazy(() => customerSchema)],
});
