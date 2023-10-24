/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { UpdateCustomer, updateCustomerSchema } from './updateCustomer';

export interface UpdateCustomerRequest {
  customer: UpdateCustomer;
}

export const updateCustomerRequestSchema: Schema<UpdateCustomerRequest> = object(
  { customer: ['customer', lazy(() => updateCustomerSchema)] }
);
