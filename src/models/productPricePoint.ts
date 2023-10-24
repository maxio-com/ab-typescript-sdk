/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { PricePointType, pricePointTypeSchema } from './pricePointType';

export interface ProductPricePoint {
  id?: number;
  name?: string;
  handle?: string;
  priceInCents?: number;
  interval?: number;
  intervalUnit?: string;
  trialPriceInCents?: number;
  trialInterval?: number;
  trialIntervalUnit?: string;
  trialType?: string;
  /** reserved for future use */
  introductoryOffer?: boolean;
  initialChargeInCents?: number;
  initialChargeAfterTrial?: boolean;
  expirationInterval?: number;
  expirationIntervalUnit?: string;
  productId?: number;
  archivedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  /** Whether or not to use the site's exchange rate or define your own pricing when your site has multiple currencies defined. */
  useSiteExchangeRate?: boolean;
  /**
   * Price point type. We expose the following types:
   * 1. **default**: a price point that is marked as a default price for a certain product.
   * 2. **custom**: a custom price point.
   * 3. **catalog**: a price point that is **not** marked as a default price for a certain product and is **not** a custom one.
   */
  type?: PricePointType;
  taxIncluded?: boolean;
  subscriptionId?: number | null;
}

export const productPricePointSchema: Schema<ProductPricePoint> = object({
  id: ['id', optional(number())],
  name: ['name', optional(string())],
  handle: ['handle', optional(string())],
  priceInCents: ['price_in_cents', optional(number())],
  interval: ['interval', optional(number())],
  intervalUnit: ['interval_unit', optional(string())],
  trialPriceInCents: ['trial_price_in_cents', optional(number())],
  trialInterval: ['trial_interval', optional(number())],
  trialIntervalUnit: ['trial_interval_unit', optional(string())],
  trialType: ['trial_type', optional(string())],
  introductoryOffer: ['introductory_offer', optional(boolean())],
  initialChargeInCents: ['initial_charge_in_cents', optional(number())],
  initialChargeAfterTrial: ['initial_charge_after_trial', optional(boolean())],
  expirationInterval: ['expiration_interval', optional(number())],
  expirationIntervalUnit: ['expiration_interval_unit', optional(string())],
  productId: ['product_id', optional(number())],
  archivedAt: ['archived_at', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
  type: ['type', optional(pricePointTypeSchema)],
  taxIncluded: ['tax_included', optional(boolean())],
  subscriptionId: ['subscription_id', optional(nullable(number()))],
});
