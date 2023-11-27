/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Price, priceSchema } from './price';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';

export interface OveragePricing {
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme: PricingScheme;
  prices?: Price[];
}

export const overagePricingSchema: Schema<OveragePricing> = object({
  pricingScheme: ['pricing_scheme', pricingSchemeSchema],
  prices: ['prices', optional(array(lazy(() => priceSchema)))],
});
