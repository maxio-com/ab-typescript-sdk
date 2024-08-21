/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, number, optional, Schema } from '../schema';
import { BillingSchedule, billingScheduleSchema } from './billingSchedule';
import {
  ComponentCustomPrice,
  componentCustomPriceSchema,
} from './componentCustomPrice';

export interface ActivateEventBasedComponent {
  /** The Chargify id of the price point */
  pricePointId?: number;
  /** This attribute is particularly useful when you need to align billing events for different components on distinct schedules within a subscription. Please note this only works for site with Multifrequency enabled */
  billingSchedule?: BillingSchedule;
  /** Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. */
  customPrice?: ComponentCustomPrice;
  [key: string]: unknown;
}

export const activateEventBasedComponentSchema: Schema<ActivateEventBasedComponent> = expandoObject(
  {
    pricePointId: ['price_point_id', optional(number())],
    billingSchedule: [
      'billing_schedule',
      optional(lazy(() => billingScheduleSchema)),
    ],
    customPrice: [
      'custom_price',
      optional(lazy(() => componentCustomPriceSchema)),
    ],
  }
);
