/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';
import {
  ComponentAllocationChangeAllocatedQuantity,
  componentAllocationChangeAllocatedQuantitySchema,
} from './containers/componentAllocationChangeAllocatedQuantity';

export interface ComponentAllocationChange {
  previousAllocation: number;
  newAllocation: number;
  componentId: number;
  componentHandle: string;
  memo: string;
  allocationId: number;
  allocatedQuantity?: ComponentAllocationChangeAllocatedQuantity;
  [key: string]: unknown;
}

export const componentAllocationChangeSchema: Schema<ComponentAllocationChange> = expandoObject(
  {
    previousAllocation: ['previous_allocation', number()],
    newAllocation: ['new_allocation', number()],
    componentId: ['component_id', number()],
    componentHandle: ['component_handle', string()],
    memo: ['memo', string()],
    allocationId: ['allocation_id', number()],
    allocatedQuantity: [
      'allocated_quantity',
      optional(componentAllocationChangeAllocatedQuantitySchema),
    ],
  }
);
