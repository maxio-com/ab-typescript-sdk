/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  PricePointExpirationIntervalUnit,
  pricePointExpirationIntervalUnitSchema,
} from './containers/pricePointExpirationIntervalUnit';
import { OveragePricing, overagePricingSchema } from './overagePricing';
import { Price, priceSchema } from './price';

export interface PricePoint {
  name?: string;
  handle?: string;
  pricingScheme?: string;
  prices?: Price[];
  /** Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. */
  useSiteExchangeRate?: boolean;
  overagePricing?: OveragePricing;
  /** Boolean which controls whether or not remaining units should be rolled over to the next period */
  rolloverPrepaidRemainder?: boolean;
  /** Boolean which controls whether or not the allocated quantity should be renewed at the beginning of each period */
  renewPrepaidAllocation?: boolean;
  /** (only for prepaid usage components where rollover_prepaid_remainder is true) The number of `expiration_interval_unit`s after which rollover amounts should expire */
  expirationInterval?: number;
  expirationIntervalUnit?: PricePointExpirationIntervalUnit;
}

export const pricePointSchema: Schema<PricePoint> = object({
  name: ['name', optional(string())],
  handle: ['handle', optional(string())],
  pricingScheme: ['pricing_scheme', optional(string())],
  prices: ['prices', optional(array(lazy(() => priceSchema)))],
  useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
  overagePricing: [
    'overage_pricing',
    optional(lazy(() => overagePricingSchema)),
  ],
  rolloverPrepaidRemainder: ['rollover_prepaid_remainder', optional(boolean())],
  renewPrepaidAllocation: ['renew_prepaid_allocation', optional(boolean())],
  expirationInterval: ['expiration_interval', optional(number())],
  expirationIntervalUnit: [
    'expiration_interval_unit',
    optional(pricePointExpirationIntervalUnitSchema),
  ],
});
