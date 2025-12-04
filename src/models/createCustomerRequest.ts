/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { CreateCustomer, createCustomerSchema } from './createCustomer.js';

export interface CreateCustomerRequest {
  customer: CreateCustomer;
  [key: string]: unknown;
}

export const createCustomerRequestSchema: Schema<CreateCustomerRequest> = lazy(
  () => expandoObject({ customer: ['customer', createCustomerSchema] })
);
