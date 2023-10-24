/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  CreateOrUpdateSegmentPrice,
  createOrUpdateSegmentPriceSchema,
} from './createOrUpdateSegmentPrice';

export interface UpdateSegment {
  /** The handle for the pricing scheme. Available options: per_unit, volume, tiered, stairstep. See [Price Bracket Rules](https://help.chargify.com/products/product-components.html#price-bracket-rules) for an overview of pricing schemes. */
  pricingScheme: string;
  prices?: CreateOrUpdateSegmentPrice[];
}

export const updateSegmentSchema: Schema<UpdateSegment> = object({
  pricingScheme: ['pricing_scheme', string()],
  prices: [
    'prices',
    optional(array(lazy(() => createOrUpdateSegmentPriceSchema))),
  ],
});
