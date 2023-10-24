/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, Schema, string } from '../schema';
import {
  PrepaidUsageAllocationDetail,
  prepaidUsageAllocationDetailSchema,
} from './prepaidUsageAllocationDetail';

export interface PrepaidUsage {
  previousUnitBalance: string;
  previousOverageUnitBalance: string;
  newUnitBalance: number;
  newOverageUnitBalance: number;
  usageQuantity: number;
  overageUsageQuantity: number;
  componentId: number;
  componentHandle: string;
  memo: string;
  allocationDetails: PrepaidUsageAllocationDetail[];
}

export const prepaidUsageSchema: Schema<PrepaidUsage> = object({
  previousUnitBalance: ['previous_unit_balance', string()],
  previousOverageUnitBalance: ['previous_overage_unit_balance', string()],
  newUnitBalance: ['new_unit_balance', number()],
  newOverageUnitBalance: ['new_overage_unit_balance', number()],
  usageQuantity: ['usage_quantity', number()],
  overageUsageQuantity: ['overage_usage_quantity', number()],
  componentId: ['component_id', number()],
  componentHandle: ['component_handle', string()],
  memo: ['memo', string()],
  allocationDetails: [
    'allocation_details',
    array(lazy(() => prepaidUsageAllocationDetailSchema)),
  ],
});
