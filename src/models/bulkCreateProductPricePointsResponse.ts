/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { ProductPricePoint, productPricePointSchema } from './productPricePoint';

export interface BulkCreateProductPricePointsResponse {
  pricePoints?: ProductPricePoint[];
}

export const bulkCreateProductPricePointsResponseSchema: Schema<BulkCreateProductPricePointsResponse> = object(
  {
    pricePoints: [
      'price_points',
      optional(array(lazy(() => productPricePointSchema))),
    ],
  }
);
