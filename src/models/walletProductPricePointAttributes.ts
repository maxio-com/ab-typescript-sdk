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
  string,
} from '../schema.js';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit.js';
import { Price1, price1Schema } from './price1.js';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme.js';

/** A price point to create for the Wallet Product, in the same call that creates or updates it. */
export interface WalletProductPricePointAttributes {
  /** The price point's name. Required. Omitting it fails validation with a message that reads `Name: cannot be blank.`, not naming the price point. */
  name: string;
  handle?: string;
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme?: PricingScheme;
  /** Required when `pricing_scheme` is `per_unit`. */
  unitPrice?: string | null;
  taxIncluded?: boolean;
  /** Requires Multifrequency to be enabled on the site. */
  interval?: number;
  intervalUnit?: IntervalUnit;
  useSiteExchangeRate?: boolean;
  /** Required for every `pricing_scheme` other than `per_unit`. */
  prices?: Price1[];
  [key: string]: unknown;
}

export const walletProductPricePointAttributesSchema: Schema<WalletProductPricePointAttributes> = lazy(
  () =>
    expandoObject({
      name: ['name', string()],
      handle: ['handle', optional(string())],
      pricingScheme: ['pricing_scheme', optional(pricingSchemeSchema)],
      unitPrice: ['unit_price', optional(nullable(string()))],
      taxIncluded: ['tax_included', optional(boolean())],
      interval: ['interval', optional(number())],
      intervalUnit: ['interval_unit', optional(intervalUnitSchema)],
      useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
      prices: ['prices', optional(array(price1Schema))],
    })
);
