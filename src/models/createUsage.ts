/**
 * AdvancedBilling
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
} from '../schema.js';
import { BillingSchedule, billingScheduleSchema } from './billingSchedule.js';
import {
  ComponentCustomPrice,
  componentCustomPriceSchema,
} from './componentCustomPrice.js';

export interface CreateUsage {
  /** integer by default or decimal number if fractional quantities are enabled for the component */
  quantity?: number;
  pricePointId?: string;
  memo?: string;
  /** Billing schedule settings for component allocations or usages on multi-frequency subscriptions. Use this to start a component's billing period on a custom date instead of aligning with the product charge schedule. */
  billingSchedule?: BillingSchedule;
  /** Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. */
  customPrice?: ComponentCustomPrice;
  [key: string]: unknown;
}

export const createUsageSchema: Schema<CreateUsage> = lazy(() =>
  expandoObject({
    quantity: ['quantity', optional(number())],
    pricePointId: ['price_point_id', optional(string())],
    memo: ['memo', optional(string())],
    billingSchedule: ['billing_schedule', optional(billingScheduleSchema)],
    customPrice: ['custom_price', optional(componentCustomPriceSchema)],
  })
);
