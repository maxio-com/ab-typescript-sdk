/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { CreateAllocation, createAllocationSchema } from './createAllocation';

export interface CreateAllocationRequest {
  allocation: CreateAllocation;
  [key: string]: unknown;
}

export const createAllocationRequestSchema: Schema<CreateAllocationRequest> = expandoObject(
  { allocation: ['allocation', lazy(() => createAllocationSchema)] }
);
