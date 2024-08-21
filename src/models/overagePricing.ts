/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import { Price, priceSchema } from './price';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';

export interface OveragePricing {
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme: PricingScheme;
  prices?: Price[];
  [key: string]: unknown;
}

export const overagePricingSchema: Schema<OveragePricing> = expandoObject({
  pricingScheme: ['pricing_scheme', pricingSchemeSchema],
  prices: ['prices', optional(array(lazy(() => priceSchema)))],
});
