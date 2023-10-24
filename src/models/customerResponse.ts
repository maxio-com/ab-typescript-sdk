/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Customer, customerSchema } from './customer';

export interface CustomerResponse {
  customer: Customer;
}

export const customerResponseSchema: Schema<CustomerResponse> = object({
  customer: ['customer', lazy(() => customerSchema)],
});
