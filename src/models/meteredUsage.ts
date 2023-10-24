/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface MeteredUsage {
  previousUnitBalance: string;
  newUnitBalance: number;
  usageQuantity: number;
  componentId: number;
  componentHandle: string;
  memo: string;
}

export const meteredUsageSchema: Schema<MeteredUsage> = object({
  previousUnitBalance: ['previous_unit_balance', string()],
  newUnitBalance: ['new_unit_balance', number()],
  usageQuantity: ['usage_quantity', number()],
  componentId: ['component_id', number()],
  componentHandle: ['component_handle', string()],
  memo: ['memo', string()],
});
