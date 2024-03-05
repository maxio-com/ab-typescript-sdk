/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit';
import { Price, priceSchema } from './price';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';

export interface ComponentPricePointItem {
  name?: string;
  handle?: string;
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme?: PricingScheme;
  /** The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. */
  interval?: number;
  /** A string representing the interval unit for this component price point, either month or day. This property is only available for sites with Multifrequency enabled. */
  intervalUnit?: IntervalUnit;
  prices?: Price[];
  [key: string]: unknown;
}

export const componentPricePointItemSchema: Schema<ComponentPricePointItem> = expandoObject(
  {
    name: ['name', optional(string())],
    handle: ['handle', optional(string())],
    pricingScheme: ['pricing_scheme', optional(pricingSchemeSchema)],
    interval: ['interval', optional(number())],
    intervalUnit: ['interval_unit', optional(intervalUnitSchema)],
    prices: ['prices', optional(array(lazy(() => priceSchema)))],
  }
);
