/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, number, Schema } from '../schema.js';
import {
  CreateOrUpdateSegmentPrice,
  createOrUpdateSegmentPriceSchema,
} from './createOrUpdateSegmentPrice.js';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme.js';

export interface BulkUpdateSegmentsItem {
  /** The ID of the segment you want to update. */
  id: number;
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme: PricingScheme;
  prices: CreateOrUpdateSegmentPrice[];
  [key: string]: unknown;
}

export const bulkUpdateSegmentsItemSchema: Schema<BulkUpdateSegmentsItem> = expandoObject(
  {
    id: ['id', number()],
    pricingScheme: ['pricing_scheme', pricingSchemeSchema],
    prices: ['prices', array(lazy(() => createOrUpdateSegmentPriceSchema))],
  }
);
