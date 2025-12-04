/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
} from '../schema.js';
import {
  ExpirationIntervalUnit,
  expirationIntervalUnitSchema,
} from './expirationIntervalUnit.js';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit.js';
import { Price, priceSchema } from './price.js';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme.js';

/** Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. */
export interface ComponentCustomPrice {
  /** Whether or not the price point includes tax */
  taxIncluded?: boolean;
  /** Omit for On/Off components */
  pricingScheme?: PricingScheme;
  /** The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. */
  interval?: number;
  /** A string representing the interval unit for this component price point, either month or day. This property is only available for sites with Multifrequency enabled. */
  intervalUnit?: IntervalUnit | null;
  /** On/off components only need one price bracket starting at 1 */
  prices: Price[];
  /** Applicable only to prepaid usage components. Controls whether the allocated quantity renews each period. */
  renewPrepaidAllocation?: boolean;
  /** Applicable only to prepaid usage components. Controls whether remaining units roll over to the next period. */
  rolloverPrepaidRemainder?: boolean;
  /** Applicable only when rollover is enabled. Number of `expiration_interval_unit`s after which rollover amounts expire. */
  expirationInterval?: number | null;
  /** Applicable only when rollover is enabled. Interval unit for rollover expiration (month or day). */
  expirationIntervalUnit?: ExpirationIntervalUnit | null;
  [key: string]: unknown;
}

export const componentCustomPriceSchema: Schema<ComponentCustomPrice> = lazy(
  () =>
    expandoObject({
      taxIncluded: ['tax_included', optional(boolean())],
      pricingScheme: ['pricing_scheme', optional(pricingSchemeSchema)],
      interval: ['interval', optional(number())],
      intervalUnit: ['interval_unit', optional(nullable(intervalUnitSchema))],
      prices: ['prices', array(priceSchema)],
      renewPrepaidAllocation: ['renew_prepaid_allocation', optional(boolean())],
      rolloverPrepaidRemainder: [
        'rollover_prepaid_remainder',
        optional(boolean()),
      ],
      expirationInterval: ['expiration_interval', optional(nullable(number()))],
      expirationIntervalUnit: [
        'expiration_interval_unit',
        optional(nullable(expirationIntervalUnitSchema)),
      ],
    })
);
