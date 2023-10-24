/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface ComponentAllocationChange {
  previousAllocation: number;
  newAllocation: number;
  componentId: number;
  componentHandle: string;
  memo: string;
  allocationId: number;
  allocatedQuantity?: number;
}

export const componentAllocationChangeSchema: Schema<ComponentAllocationChange> = object(
  {
    previousAllocation: ['previous_allocation', number()],
    newAllocation: ['new_allocation', number()],
    componentId: ['component_id', number()],
    componentHandle: ['component_handle', string()],
    memo: ['memo', string()],
    allocationId: ['allocation_id', number()],
    allocatedQuantity: ['allocated_quantity', optional(number())],
  }
);
