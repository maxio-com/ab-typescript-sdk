/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, Schema } from '../schema';
import {
  CreateOrUpdateSegmentPrice,
  createOrUpdateSegmentPriceSchema,
} from './createOrUpdateSegmentPrice';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';

export interface BulkUpdateSegmentsItem {
  /** The ID of the segment you want to update. */
  id: number;
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme: PricingScheme;
  prices: CreateOrUpdateSegmentPrice[];
}

export const bulkUpdateSegmentsItemSchema: Schema<BulkUpdateSegmentsItem> = object(
  {
    id: ['id', number()],
    pricingScheme: ['pricing_scheme', pricingSchemeSchema],
    prices: ['prices', array(lazy(() => createOrUpdateSegmentPriceSchema))],
  }
);
