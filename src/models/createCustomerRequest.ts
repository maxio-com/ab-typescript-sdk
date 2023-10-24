/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { CreateCustomer, createCustomerSchema } from './createCustomer';

export interface CreateCustomerRequest {
  customer: CreateCustomer;
}

export const createCustomerRequestSchema: Schema<CreateCustomerRequest> = object(
  { customer: ['customer', lazy(() => createCustomerSchema)] }
);
