/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Allocation, allocationSchema } from './allocation';

export interface AllocationResponse {
  allocation?: Allocation;
}

export const allocationResponseSchema: Schema<AllocationResponse> = object({
  allocation: ['allocation', optional(lazy(() => allocationSchema))],
});
