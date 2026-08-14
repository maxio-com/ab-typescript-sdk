/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, number, Schema, string } from '../schema.js';
import {
  MeteredUsageNewUnitBalance,
  meteredUsageNewUnitBalanceSchema,
} from './containers/meteredUsageNewUnitBalance.js';

export interface MeteredUsage {
  previousUnitBalance: string;
  newUnitBalance: MeteredUsageNewUnitBalance;
  usageQuantity: number;
  componentId: number;
  componentHandle: string;
  memo: string;
  [key: string]: unknown;
}

export const meteredUsageSchema: Schema<MeteredUsage> = lazy(() =>
  expandoObject({
    previousUnitBalance: ['previous_unit_balance', string()],
    newUnitBalance: ['new_unit_balance', meteredUsageNewUnitBalanceSchema],
    usageQuantity: ['usage_quantity', number()],
    componentId: ['component_id', number()],
    componentHandle: ['component_handle', string()],
    memo: ['memo', string()],
  })
);
