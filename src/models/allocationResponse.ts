/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import { Allocation, allocationSchema } from './allocation.js';

export interface AllocationResponse {
  allocation?: Allocation;
  [key: string]: unknown;
}

export const allocationResponseSchema: Schema<AllocationResponse> = lazy(() =>
  expandoObject({ allocation: ['allocation', optional(allocationSchema)] })
);
