/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  optional,
  Schema,
  string,
} from '../schema.js';

/** Billing schedule settings for component allocations or usages on multi-frequency subscriptions. Use this to start a component's billing period on a custom date instead of aligning with the product charge schedule. */
export interface BillingSchedule {
  /** Custom start date (ISO 8601 date, YYYY-MM-DD) for the component's first billing period. If omitted or null, billing aligns with the product schedule. If provided, date must be on or after the minimum allowed date for the subscription or component. */
  initialBillingAt?: string | null;
  [key: string]: unknown;
}

export const billingScheduleSchema: Schema<BillingSchedule> = expandoObject({
  initialBillingAt: ['initial_billing_at', optional(nullable(string()))],
});
