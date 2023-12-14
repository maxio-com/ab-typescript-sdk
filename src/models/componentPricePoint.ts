/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ComponentPricePointPrice,
  componentPricePointPriceSchema,
} from './componentPricePointPrice';
import { PricePointType, pricePointTypeSchema } from './pricePointType';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';

export interface ComponentPricePoint {
  id?: number;
  /**
   * Price point type. We expose the following types:
   * 1. **default**: a price point that is marked as a default price for a certain product.
   * 2. **custom**: a custom price point.
   * 3. **catalog**: a price point that is **not** marked as a default price for a certain product and is **not** a custom one.
   */
  type?: PricePointType;
  /** Note: Refer to type attribute instead */
  mDefault?: boolean;
  name?: string;
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme?: PricingScheme;
  componentId?: number;
  handle?: string;
  archivedAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
  prices?: ComponentPricePointPrice[];
  /** Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. */
  useSiteExchangeRate?: boolean;
  /** (only used for Custom Pricing - ie. when the price point's type is `custom`) The id of the subscription that the custom price point is for. */
  subscriptionId?: number;
  taxIncluded?: boolean;
}

export const componentPricePointSchema: Schema<ComponentPricePoint> = object({
  id: ['id', optional(number())],
  type: ['type', optional(pricePointTypeSchema)],
  mDefault: ['default', optional(boolean())],
  name: ['name', optional(string())],
  pricingScheme: ['pricing_scheme', optional(pricingSchemeSchema)],
  componentId: ['component_id', optional(number())],
  handle: ['handle', optional(string())],
  archivedAt: ['archived_at', optional(nullable(string()))],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  prices: [
    'prices',
    optional(array(lazy(() => componentPricePointPriceSchema))),
  ],
  useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
  subscriptionId: ['subscription_id', optional(number())],
  taxIncluded: ['tax_included', optional(boolean())],
});
