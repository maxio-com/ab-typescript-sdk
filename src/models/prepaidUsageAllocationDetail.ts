/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema';

export interface PrepaidUsageAllocationDetail {
  allocationId?: number;
  chargeId?: number;
  usageQuantity?: number;
  [key: string]: unknown;
}

export const prepaidUsageAllocationDetailSchema: Schema<PrepaidUsageAllocationDetail> = expandoObject(
  {
    allocationId: ['allocation_id', optional(number())],
    chargeId: ['charge_id', optional(number())],
    usageQuantity: ['usage_quantity', optional(number())],
  }
);
