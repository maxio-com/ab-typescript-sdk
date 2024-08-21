/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import {
  CreateProductPricePoint,
  createProductPricePointSchema,
} from './createProductPricePoint';

export interface BulkCreateProductPricePointsRequest {
  pricePoints: CreateProductPricePoint[];
  [key: string]: unknown;
}

export const bulkCreateProductPricePointsRequestSchema: Schema<BulkCreateProductPricePointsRequest> = expandoObject(
  {
    pricePoints: [
      'price_points',
      array(lazy(() => createProductPricePointSchema)),
    ],
  }
);
