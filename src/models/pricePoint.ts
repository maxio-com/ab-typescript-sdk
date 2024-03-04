/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit';
import { OveragePricing, overagePricingSchema } from './overagePricing';
import { Price, priceSchema } from './price';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';

export interface PricePoint {
  name?: string;
  handle?: string;
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme?: PricingScheme;
  prices?: Price[];
  /** Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. */
  useSiteExchangeRate?: boolean;
  /** Whether or not the price point includes tax */
  taxIncluded?: boolean;
  /** The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. */
  interval?: number;
  /** A string representing the interval unit for this price point, either month or day. This property is only available for sites with Multifrequency enabled. */
  intervalUnit?: IntervalUnit;
  overagePricing?: OveragePricing;
  /** Boolean which controls whether or not remaining units should be rolled over to the next period */
  rolloverPrepaidRemainder?: boolean;
  /** Boolean which controls whether or not the allocated quantity should be renewed at the beginning of each period */
  renewPrepaidAllocation?: boolean;
  /** (only for prepaid usage components where rollover_prepaid_remainder is true) The number of `expiration_interval_unit`s after which rollover amounts should expire */
  expirationInterval?: number;
  expirationIntervalUnit?: IntervalUnit;
  [key: string]: unknown;
}

export const pricePointSchema: Schema<PricePoint> = expandoObject({
  name: ['name', optional(string())],
  handle: ['handle', optional(string())],
  pricingScheme: ['pricing_scheme', optional(pricingSchemeSchema)],
  prices: ['prices', optional(array(lazy(() => priceSchema)))],
  useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
  taxIncluded: ['tax_included', optional(boolean())],
  interval: ['interval', optional(number())],
  intervalUnit: ['interval_unit', optional(intervalUnitSchema)],
  overagePricing: [
    'overage_pricing',
    optional(lazy(() => overagePricingSchema)),
  ],
  rolloverPrepaidRemainder: ['rollover_prepaid_remainder', optional(boolean())],
  renewPrepaidAllocation: ['renew_prepaid_allocation', optional(boolean())],
  expirationInterval: ['expiration_interval', optional(number())],
  expirationIntervalUnit: [
    'expiration_interval_unit',
    optional(intervalUnitSchema),
  ],
});
