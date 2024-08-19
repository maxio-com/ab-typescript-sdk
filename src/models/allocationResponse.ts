/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { Allocation, allocationSchema } from './allocation';

export interface AllocationResponse {
  allocation?: Allocation;
  [key: string]: unknown;
}

export const allocationResponseSchema: Schema<AllocationResponse> = expandoObject(
  { allocation: ['allocation', optional(lazy(() => allocationSchema))] }
);
