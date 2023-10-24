/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, Schema, string } from '../schema';
import {
  CreateOrUpdateSegmentPrice,
  createOrUpdateSegmentPriceSchema,
} from './createOrUpdateSegmentPrice';

export interface BulkUpdateSegmentsItem {
  /** The ID of the segment you want to update. */
  id: number;
  /** The handle for the pricing scheme. Available options: per_unit, volume, tiered, stairstep. See [Price Bracket Rules](https://help.chargify.com/products/product-components.html#price-bracket-rules) for an overview of pricing schemes. */
  pricingScheme: string;
  prices: CreateOrUpdateSegmentPrice[];
}

export const bulkUpdateSegmentsItemSchema: Schema<BulkUpdateSegmentsItem> = object(
  {
    id: ['id', number()],
    pricingScheme: ['pricing_scheme', string()],
    prices: ['prices', array(lazy(() => createOrUpdateSegmentPriceSchema))],
  }
);
