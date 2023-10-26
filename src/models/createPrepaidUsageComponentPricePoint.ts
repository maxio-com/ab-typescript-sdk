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
  CreatePrepaidUsageComponentPricePointExpirationIntervalUnit,
  createPrepaidUsageComponentPricePointExpirationIntervalUnitSchema,
} from './containers/createPrepaidUsageComponentPricePointExpirationIntervalUnit';
import { OveragePricing, overagePricingSchema } from './overagePricing';
import { Price, priceSchema } from './price';

export interface CreatePrepaidUsageComponentPricePoint {
  name: string;
  handle?: string;
  pricingScheme: string;
  prices: Price[];
  overagePricing: OveragePricing;
  /** Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. */
  useSiteExchangeRate?: boolean;
  /** Boolean which controls whether or not remaining units should be rolled over to the next period */
  rolloverPrepaidRemainder?: boolean;
  /** Boolean which controls whether or not the allocated quantity should be renewed at the beginning of each period */
  renewPrepaidAllocation?: boolean;
  /** (only for prepaid usage components where rollover_prepaid_remainder is true) The number of `expiration_interval_unit`s after which rollover amounts should expire */
  expirationInterval?: number;
  expirationIntervalUnit?: CreatePrepaidUsageComponentPricePointExpirationIntervalUnit;
}

export const createPrepaidUsageComponentPricePointSchema: Schema<CreatePrepaidUsageComponentPricePoint> = object(
  {
    name: ['name', string()],
    handle: ['handle', optional(string())],
    pricingScheme: ['pricing_scheme', string()],
    prices: ['prices', array(lazy(() => priceSchema))],
    overagePricing: ['overage_pricing', lazy(() => overagePricingSchema)],
    useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
    rolloverPrepaidRemainder: [
      'rollover_prepaid_remainder',
      optional(boolean()),
    ],
    renewPrepaidAllocation: ['renew_prepaid_allocation', optional(boolean())],
    expirationInterval: ['expiration_interval', optional(number())],
    expirationIntervalUnit: [
      'expiration_interval_unit',
      optional(
        createPrepaidUsageComponentPricePointExpirationIntervalUnitSchema
      ),
    ],
  }
);
