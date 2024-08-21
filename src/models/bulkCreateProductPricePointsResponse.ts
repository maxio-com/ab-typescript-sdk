/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import {
  ProductPricePoint,
  productPricePointSchema,
} from './productPricePoint';

export interface BulkCreateProductPricePointsResponse {
  pricePoints?: ProductPricePoint[];
  [key: string]: unknown;
}

export const bulkCreateProductPricePointsResponseSchema: Schema<BulkCreateProductPricePointsResponse> = expandoObject(
  {
    pricePoints: [
      'price_points',
      optional(array(lazy(() => productPricePointSchema))),
    ],
  }
);
