/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { CreateCustomer, createCustomerSchema } from './createCustomer';

export interface CreateCustomerRequest {
  customer: CreateCustomer;
  [key: string]: unknown;
}

export const createCustomerRequestSchema: Schema<CreateCustomerRequest> = expandoObject(
  { customer: ['customer', lazy(() => createCustomerSchema)] }
);
