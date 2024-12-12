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
import { IntervalUnit, intervalUnitSchema } from './intervalUnit';
import { Price, priceSchema } from './price';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';

export interface CreateComponentPricePoint {
  name: string;
  handle?: string;
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme: PricingScheme;
  prices: Price[];
  /** Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. Setting not supported when creating price points in bulk. */
  useSiteExchangeRate?: boolean;
  /** Whether or not the price point includes tax. Setting not supported when creating price points in bulk. */
  taxIncluded?: boolean;
  /** The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. */
  interval?: number;
  /** A string representing the interval unit for this price point, either month or day. This property is only available for sites with Multifrequency enabled. */
  intervalUnit?: IntervalUnit | null;
  [key: string]: unknown;
}

export const createComponentPricePointSchema: Schema<CreateComponentPricePoint> = expandoObject(
  {
    name: ['name', string()],
    handle: ['handle', optional(string())],
    pricingScheme: ['pricing_scheme', pricingSchemeSchema],
    prices: ['prices', array(lazy(() => priceSchema))],
    useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
    taxIncluded: ['tax_included', optional(boolean())],
    interval: ['interval', optional(number())],
    intervalUnit: ['interval_unit', optional(nullable(intervalUnitSchema))],
  }
);
