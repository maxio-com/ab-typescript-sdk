/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { CreateAllocation, createAllocationSchema } from './createAllocation';

export interface CreateAllocationRequest {
  allocation: CreateAllocation;
}

export const createAllocationRequestSchema: Schema<CreateAllocationRequest> = object(
  { allocation: ['allocation', lazy(() => createAllocationSchema)] }
);
