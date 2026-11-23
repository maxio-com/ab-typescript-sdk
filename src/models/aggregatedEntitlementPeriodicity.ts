/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema.js';
import {
  EntitlementPeriodicityUnit,
  entitlementPeriodicityUnitSchema,
} from './entitlementPeriodicityUnit.js';

export interface AggregatedEntitlementPeriodicity {
  interval?: number;
  /** The recurring window over which a `usage_limit` feature's allowance resets. */
  unit?: EntitlementPeriodicityUnit;
  [key: string]: unknown;
}

export const aggregatedEntitlementPeriodicitySchema: Schema<AggregatedEntitlementPeriodicity> = expandoObject(
  {
    interval: ['interval', optional(number())],
    unit: ['unit', optional(entitlementPeriodicityUnitSchema)],
  }
);
