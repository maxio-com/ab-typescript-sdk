/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { CurrencyPrice, currencyPriceSchema } from './currencyPrice';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit';
import { PricePointType, pricePointTypeSchema } from './pricePointType';

export interface ProductPricePoint {
  id?: number;
  /** The product price point name */
  name?: string;
  /** The product price point API handle */
  handle?: string;
  /** The product price point price, in integer cents */
  priceInCents?: bigint;
  /** The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this product price point would renew every 30 days */
  interval?: number;
  /** A string representing the interval unit for this product price point, either month or day */
  intervalUnit?: IntervalUnit;
  /** The product price point trial price, in integer cents */
  trialPriceInCents?: bigint;
  /** The numerical trial interval. i.e. an interval of ‘30’ coupled with a trial_interval_unit of day would mean this product price point trial would last 30 days */
  trialInterval?: number;
  /** A string representing the trial interval unit for this product price point, either month or day */
  trialIntervalUnit?: IntervalUnit;
  trialType?: string;
  /** reserved for future use */
  introductoryOffer?: boolean;
  /** The product price point initial charge, in integer cents */
  initialChargeInCents?: bigint;
  initialChargeAfterTrial?: boolean;
  /** The numerical expiration interval. i.e. an expiration_interval of ‘30’ coupled with an expiration_interval_unit of day would mean this product price point would expire after 30 days */
  expirationInterval?: number;
  /** A string representing the expiration interval unit for this product price point, either month or day */
  expirationIntervalUnit?: IntervalUnit;
  /** The product id this price point belongs to */
  productId?: number;
  /** Timestamp indicating when this price point was archived */
  archivedAt?: string | null;
  /** Timestamp indicating when this price point was created */
  createdAt?: string;
  /** Timestamp indicating when this price point was last updated */
  updatedAt?: string;
  /** Whether or not to use the site's exchange rate or define your own pricing when your site has multiple currencies defined. */
  useSiteExchangeRate?: boolean;
  /** The type of price point */
  type?: PricePointType;
  /** Whether or not the price point includes tax */
  taxIncluded?: boolean;
  /** The subscription id this price point belongs to */
  subscriptionId?: number | null;
  /** An array of currency pricing data is available when multiple currencies are defined for the site. It varies based on the use_site_exchange_rate setting for the price point. This parameter is present only in the response of read endpoints, after including the appropriate query parameter. */
  currencyPrices?: CurrencyPrice[];
  [key: string]: unknown;
}

export const productPricePointSchema: Schema<ProductPricePoint> = expandoObject(
  {
    id: ['id', optional(number())],
    name: ['name', optional(string())],
    handle: ['handle', optional(string())],
    priceInCents: ['price_in_cents', optional(bigint())],
    interval: ['interval', optional(number())],
    intervalUnit: ['interval_unit', optional(intervalUnitSchema)],
    trialPriceInCents: ['trial_price_in_cents', optional(bigint())],
    trialInterval: ['trial_interval', optional(number())],
    trialIntervalUnit: ['trial_interval_unit', optional(intervalUnitSchema)],
    trialType: ['trial_type', optional(string())],
    introductoryOffer: ['introductory_offer', optional(boolean())],
    initialChargeInCents: ['initial_charge_in_cents', optional(bigint())],
    initialChargeAfterTrial: [
      'initial_charge_after_trial',
      optional(boolean()),
    ],
    expirationInterval: ['expiration_interval', optional(number())],
    expirationIntervalUnit: [
      'expiration_interval_unit',
      optional(intervalUnitSchema),
    ],
    productId: ['product_id', optional(number())],
    archivedAt: ['archived_at', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
    type: ['type', optional(pricePointTypeSchema)],
    taxIncluded: ['tax_included', optional(boolean())],
    subscriptionId: ['subscription_id', optional(nullable(number()))],
    currencyPrices: [
      'currency_prices',
      optional(array(lazy(() => currencyPriceSchema))),
    ],
  }
);
