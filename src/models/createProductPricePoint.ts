/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface CreateProductPricePoint {
  name: string;
  handle?: string;
  priceInCents: number;
  interval: number;
  intervalUnit: string;
  trialPriceInCents?: number;
  trialInterval?: number;
  trialIntervalUnit?: string;
  trialType?: string;
  initialChargeInCents?: number;
  initialChargeAfterTrial?: boolean;
  expirationInterval?: number;
  expirationIntervalUnit?: string;
  /** Whether or not to use the site's exchange rate or define your own pricing when your site has multiple currencies defined. */
  useSiteExchangeRate?: boolean;
}

export const createProductPricePointSchema: Schema<CreateProductPricePoint> = object(
  {
    name: ['name', string()],
    handle: ['handle', optional(string())],
    priceInCents: ['price_in_cents', number()],
    interval: ['interval', number()],
    intervalUnit: ['interval_unit', string()],
    trialPriceInCents: ['trial_price_in_cents', optional(number())],
    trialInterval: ['trial_interval', optional(number())],
    trialIntervalUnit: ['trial_interval_unit', optional(string())],
    trialType: ['trial_type', optional(string())],
    initialChargeInCents: ['initial_charge_in_cents', optional(number())],
    initialChargeAfterTrial: [
      'initial_charge_after_trial',
      optional(boolean()),
    ],
    expirationInterval: ['expiration_interval', optional(number())],
    expirationIntervalUnit: ['expiration_interval_unit', optional(string())],
    useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
  }
);
