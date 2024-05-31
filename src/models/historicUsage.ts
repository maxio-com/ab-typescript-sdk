/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

/** Optional for Event Based Components. If the `include=historic_usages` query param is provided, the last ten billing periods will be returned. */
export interface HistoricUsage {
  /** Total usage of a component for billing period */
  totalUsageQuantity?: number;
  /** Start date of billing period */
  billingPeriodStartsAt?: string;
  /** End date of billing period */
  billingPeriodEndsAt?: string;
  [key: string]: unknown;
}

export const historicUsageSchema: Schema<HistoricUsage> = expandoObject({
  totalUsageQuantity: ['total_usage_quantity', optional(number())],
  billingPeriodStartsAt: ['billing_period_starts_at', optional(string())],
  billingPeriodEndsAt: ['billing_period_ends_at', optional(string())],
});
