/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { UpdateCustomer, updateCustomerSchema } from './updateCustomer';

export interface UpdateCustomerRequest {
  customer: UpdateCustomer;
  [key: string]: unknown;
}

export const updateCustomerRequestSchema: Schema<UpdateCustomerRequest> = expandoObject(
  { customer: ['customer', lazy(() => updateCustomerSchema)] }
);
