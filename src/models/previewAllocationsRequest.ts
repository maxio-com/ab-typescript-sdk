/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { CreateAllocation, createAllocationSchema } from './createAllocation';

export interface PreviewAllocationsRequest {
  allocations: CreateAllocation[];
  /** To calculate proration amounts for a future time. Only within a current subscription period. Only ISO8601 format is supported. */
  effectiveProrationDate?: string;
}

export const previewAllocationsRequestSchema: Schema<PreviewAllocationsRequest> = object(
  {
    allocations: ['allocations', array(lazy(() => createAllocationSchema))],
    effectiveProrationDate: ['effective_proration_date', optional(string())],
  }
);
