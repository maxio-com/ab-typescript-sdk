/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  ScheduledRenewalProductPricePointInterval,
  scheduledRenewalProductPricePointIntervalSchema,
} from './containers/scheduledRenewalProductPricePointInterval.js';
import {
  ScheduledRenewalProductPricePointPriceInCents,
  scheduledRenewalProductPricePointPriceInCentsSchema,
} from './containers/scheduledRenewalProductPricePointPriceInCents.js';
import {
  ExpirationIntervalUnit,
  expirationIntervalUnitSchema,
} from './expirationIntervalUnit.js';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit.js';

/** Custom pricing for a product within a scheduled renewal. */
export interface ScheduledRenewalProductPricePoint {
  /** (Optional) */
  name?: string;
  /** (Optional) */
  handle?: string;
  /** Required if using `custom_price` attribute. */
  priceInCents: ScheduledRenewalProductPricePointPriceInCents;
  /** Required if using `custom_price` attribute. */
  interval: ScheduledRenewalProductPricePointInterval;
  /** Required if using `custom_price` attribute. */
  intervalUnit: IntervalUnit | null;
  /** (Optional) */
  taxIncluded?: boolean;
  /** The product price point initial charge, in integer cents. */
  initialChargeInCents?: bigint;
  /** The numerical expiration interval. i.e. an expiration_interval of ‘30’ coupled with an expiration_interval_unit of day would mean this product price point would expire after 30 days. */
  expirationInterval?: number;
  /** A string representing the expiration interval unit for this product price point, either month, day or never */
  expirationIntervalUnit?: ExpirationIntervalUnit | null;
  [key: string]: unknown;
}

export const scheduledRenewalProductPricePointSchema: Schema<ScheduledRenewalProductPricePoint> = lazy(
  () =>
    expandoObject({
      name: ['name', optional(string())],
      handle: ['handle', optional(string())],
      priceInCents: [
        'price_in_cents',
        scheduledRenewalProductPricePointPriceInCentsSchema,
      ],
      interval: ['interval', scheduledRenewalProductPricePointIntervalSchema],
      intervalUnit: ['interval_unit', nullable(intervalUnitSchema)],
      taxIncluded: ['tax_included', optional(boolean())],
      initialChargeInCents: ['initial_charge_in_cents', optional(bigint())],
      expirationInterval: ['expiration_interval', optional(number())],
      expirationIntervalUnit: [
        'expiration_interval_unit',
        optional(nullable(expirationIntervalUnitSchema)),
      ],
    })
);
