/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';
import { UpdatePrice, updatePriceSchema } from './updatePrice';

export interface UpdateComponentPricePoint {
  name?: string;
  handle?: string;
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme?: PricingScheme;
  /** Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. */
  useSiteExchangeRate?: boolean;
  /** Whether or not the price point includes tax */
  taxIncluded?: boolean;
  /** The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. */
  interval?: number;
  /** A string representing the interval unit for this component price point, either month or day. This property is only available for sites with Multifrequency enabled. */
  intervalUnit?: IntervalUnit;
  prices?: UpdatePrice[];
  [key: string]: unknown;
}

export const updateComponentPricePointSchema: Schema<UpdateComponentPricePoint> = expandoObject(
  {
    name: ['name', optional(string())],
    handle: ['handle', optional(string())],
    pricingScheme: ['pricing_scheme', optional(pricingSchemeSchema)],
    useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
    taxIncluded: ['tax_included', optional(boolean())],
    interval: ['interval', optional(number())],
    intervalUnit: ['interval_unit', optional(intervalUnitSchema)],
    prices: ['prices', optional(array(lazy(() => updatePriceSchema)))],
  }
);
