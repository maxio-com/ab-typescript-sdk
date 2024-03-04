/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { BillingSchedule, billingScheduleSchema } from './billingSchedule';

export interface CreateUsage {
  /** integer by default or decimal number if fractional quantities are enabled for the component */
  quantity?: number;
  pricePointId?: string;
  memo?: string;
  /** This attribute is particularly useful when you need to align billing events for different components on distinct schedules within a subscription. Please note this only works for site with Multifrequency enabled */
  billingSchedule?: BillingSchedule;
  [key: string]: unknown;
}

export const createUsageSchema: Schema<CreateUsage> = expandoObject({
  quantity: ['quantity', optional(number())],
  pricePointId: ['price_point_id', optional(string())],
  memo: ['memo', optional(string())],
  billingSchedule: [
    'billing_schedule',
    optional(lazy(() => billingScheduleSchema)),
  ],
});
