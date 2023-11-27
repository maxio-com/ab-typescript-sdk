/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit';

export interface CreateProductPricePoint {
  /** The product price point name */
  name: string;
  /** The product price point API handle */
  handle?: string;
  /** The product price point price, in integer cents */
  priceInCents: bigint;
  /** The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this product price point would renew every 30 days */
  interval: number;
  /** A string representing the interval unit for this product price point, either month or day */
  intervalUnit: IntervalUnit;
  /** The product price point trial price, in integer cents */
  trialPriceInCents?: bigint;
  /** The numerical trial interval. i.e. an interval of ‘30’ coupled with an trial_interval_unit of day would mean this product price point would renew every 30 days */
  trialInterval?: number;
  /** A string representing the trial interval unit for this product price point, either month or day */
  trialIntervalUnit?: IntervalUnit;
  trialType?: string;
  /** The product price point initial charge, in integer cents */
  initialChargeInCents?: bigint;
  initialChargeAfterTrial?: boolean;
  /** The numerical expiration interval. i.e. an expiration_interval of ‘30’ coupled with an expiration_interval_unit of day would mean this product price point would expire every 30 days */
  expirationInterval?: number;
  /** A string representing the expiration interval unit for this product price point, either month or day */
  expirationIntervalUnit?: IntervalUnit;
  /** Whether or not to use the site's exchange rate or define your own pricing when your site has multiple currencies defined. */
  useSiteExchangeRate?: boolean;
}

export const createProductPricePointSchema: Schema<CreateProductPricePoint> = object(
  {
    name: ['name', string()],
    handle: ['handle', optional(string())],
    priceInCents: ['price_in_cents', bigint()],
    interval: ['interval', number()],
    intervalUnit: ['interval_unit', intervalUnitSchema],
    trialPriceInCents: ['trial_price_in_cents', optional(bigint())],
    trialInterval: ['trial_interval', optional(number())],
    trialIntervalUnit: ['trial_interval_unit', optional(intervalUnitSchema)],
    trialType: ['trial_type', optional(string())],
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
    useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
  }
);
