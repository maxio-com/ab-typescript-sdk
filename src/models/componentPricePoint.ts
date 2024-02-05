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
  ComponentCurrencyPrice,
  componentCurrencyPriceSchema,
} from './componentCurrencyPrice';
import { ComponentPrice, componentPriceSchema } from './componentPrice';
import {
  ComponentPricePointIntervalUnit,
  componentPricePointIntervalUnitSchema,
} from './containers/componentPricePointIntervalUnit';
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
  prices?: ComponentPrice[];
  /** Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. Defaults to true during creation. */
  useSiteExchangeRate?: boolean;
  /** (only used for Custom Pricing - ie. when the price point's type is `custom`) The id of the subscription that the custom price point is for. */
  subscriptionId?: number;
  taxIncluded?: boolean;
  /** The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. */
  interval?: number | null;
  /** A string representing the interval unit for this component price point, either month or day. This property is only available for sites with Multifrequency enabled. */
  intervalUnit?: ComponentPricePointIntervalUnit | null;
  /** An array of currency pricing data is available when multiple currencies are defined for the site. It varies based on the use_site_exchange_rate setting for the price point. This parameter is present only in the response of read endpoints, after including the appropriate query parameter. */
  currencyPrices?: ComponentCurrencyPrice[];
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
  prices: ['prices', optional(array(lazy(() => componentPriceSchema)))],
  useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
  subscriptionId: ['subscription_id', optional(number())],
  taxIncluded: ['tax_included', optional(boolean())],
  interval: ['interval', optional(nullable(number()))],
  intervalUnit: [
    'interval_unit',
    optional(nullable(componentPricePointIntervalUnitSchema)),
  ],
  currencyPrices: [
    'currency_prices',
    optional(array(lazy(() => componentCurrencyPriceSchema))),
  ],
});
