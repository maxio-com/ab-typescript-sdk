/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import {
  CreateProductPricePoint,
  createProductPricePointSchema,
} from './createProductPricePoint';

export interface BulkCreateProductPricePointsRequest {
  pricePoints: CreateProductPricePoint[];
}

export const bulkCreateProductPricePointsRequestSchema: Schema<BulkCreateProductPricePointsRequest> = object(
  {
    pricePoints: [
      'price_points',
      array(lazy(() => createProductPricePointSchema)),
    ],
  }
);
