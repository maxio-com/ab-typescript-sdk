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
} from '../schema';
import {
  ComponentCurrencyPrice,
  componentCurrencyPriceSchema,
} from './componentCurrencyPrice';
import { ComponentPrice, componentPriceSchema } from './componentPrice';
import {
  ExpirationIntervalUnit,
  expirationIntervalUnitSchema,
} from './expirationIntervalUnit';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit';
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
  handle?: string | null;
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
  intervalUnit?: IntervalUnit | null;
  /** An array of currency pricing data is available when multiple currencies are defined for the site. It varies based on the use_site_exchange_rate setting for the price point. This parameter is present only in the response of read endpoints, after including the appropriate query parameter. */
  currencyPrices?: ComponentCurrencyPrice[];
  /** Applicable only to prepaid usage components. An array of overage price brackets. */
  overagePrices?: ComponentPrice[];
  /** Applicable only to prepaid usage components. Pricing scheme for overage pricing. */
  overagePricingScheme?: PricingScheme;
  /** Applicable only to prepaid usage components. Boolean which controls whether or not the allocated quantity should be renewed at the beginning of each period. */
  renewPrepaidAllocation?: boolean;
  /** Applicable only to prepaid usage components. Boolean which controls whether or not remaining units should be rolled over to the next period. */
  rolloverPrepaidRemainder?: boolean;
  /** Applicable only to prepaid usage components where rollover_prepaid_remainder is true. The number of `expiration_interval_unit`s after which rollover amounts should expire. */
  expirationInterval?: number | null;
  /** Applicable only to prepaid usage components where rollover_prepaid_remainder is true. A string representing the expiration interval unit for this component, either month or day. */
  expirationIntervalUnit?: ExpirationIntervalUnit | null;
  [key: string]: unknown;
}

export const componentPricePointSchema: Schema<ComponentPricePoint> = expandoObject(
  {
    id: ['id', optional(number())],
    type: ['type', optional(pricePointTypeSchema)],
    mDefault: ['default', optional(boolean())],
    name: ['name', optional(string())],
    pricingScheme: ['pricing_scheme', optional(pricingSchemeSchema)],
    componentId: ['component_id', optional(number())],
    handle: ['handle', optional(nullable(string()))],
    archivedAt: ['archived_at', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    prices: ['prices', optional(array(lazy(() => componentPriceSchema)))],
    useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
    subscriptionId: ['subscription_id', optional(number())],
    taxIncluded: ['tax_included', optional(boolean())],
    interval: ['interval', optional(nullable(number()))],
    intervalUnit: ['interval_unit', optional(nullable(intervalUnitSchema))],
    currencyPrices: [
      'currency_prices',
      optional(array(lazy(() => componentCurrencyPriceSchema))),
    ],
    overagePrices: [
      'overage_prices',
      optional(array(lazy(() => componentPriceSchema))),
    ],
    overagePricingScheme: [
      'overage_pricing_scheme',
      optional(pricingSchemeSchema),
    ],
    renewPrepaidAllocation: ['renew_prepaid_allocation', optional(boolean())],
    rolloverPrepaidRemainder: [
      'rollover_prepaid_remainder',
      optional(boolean()),
    ],
    expirationInterval: ['expiration_interval', optional(nullable(number()))],
    expirationIntervalUnit: [
      'expiration_interval_unit',
      optional(nullable(expirationIntervalUnitSchema)),
    ],
  }
);
