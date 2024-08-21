/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, Schema, string } from '../schema';

export interface MeteredUsage {
  previousUnitBalance: string;
  newUnitBalance: number;
  usageQuantity: number;
  componentId: number;
  componentHandle: string;
  memo: string;
  [key: string]: unknown;
}

export const meteredUsageSchema: Schema<MeteredUsage> = expandoObject({
  previousUnitBalance: ['previous_unit_balance', string()],
  newUnitBalance: ['new_unit_balance', number()],
  usageQuantity: ['usage_quantity', number()],
  componentId: ['component_id', number()],
  componentHandle: ['component_handle', string()],
  memo: ['memo', string()],
});
