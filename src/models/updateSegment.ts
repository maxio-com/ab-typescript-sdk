/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  CreateOrUpdateSegmentPrice,
  createOrUpdateSegmentPriceSchema,
} from './createOrUpdateSegmentPrice';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';

export interface UpdateSegment {
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme: PricingScheme;
  prices?: CreateOrUpdateSegmentPrice[];
}

export const updateSegmentSchema: Schema<UpdateSegment> = object({
  pricingScheme: ['pricing_scheme', pricingSchemeSchema],
  prices: [
    'prices',
    optional(array(lazy(() => createOrUpdateSegmentPriceSchema))),
  ],
});
