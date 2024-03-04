/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

/** This attribute is particularly useful when you need to align billing events for different components on distinct schedules within a subscription. Please note this only works for site with Multifrequency enabled */
export interface BillingSchedule {
  /** The initial_billing_at attribute in Maxio allows you to specify a custom starting date for billing cycles associated with components that have their own billing frequency set. Only ISO8601 format is supported. */
  initialBillingAt?: string;
  [key: string]: unknown;
}

export const billingScheduleSchema: Schema<BillingSchedule> = expandoObject({
  initialBillingAt: ['initial_billing_at', optional(string())],
});
