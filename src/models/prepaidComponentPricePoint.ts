/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import { OveragePricing, overagePricingSchema } from './overagePricing';
import { Price, priceSchema } from './price';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';

export interface PrepaidComponentPricePoint {
  name?: string;
  handle?: string;
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme?: PricingScheme;
  prices?: Price[];
  overagePricing?: OveragePricing;
  [key: string]: unknown;
}

export const prepaidComponentPricePointSchema: Schema<PrepaidComponentPricePoint> = expandoObject(
  {
    name: ['name', optional(string())],
    handle: ['handle', optional(string())],
    pricingScheme: ['pricing_scheme', optional(pricingSchemeSchema)],
    prices: ['prices', optional(array(lazy(() => priceSchema)))],
    overagePricing: [
      'overage_pricing',
      optional(lazy(() => overagePricingSchema)),
    ],
  }
);
