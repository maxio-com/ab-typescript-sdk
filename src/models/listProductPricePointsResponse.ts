/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import {
  ProductPricePoint,
  productPricePointSchema,
} from './productPricePoint';

export interface ListProductPricePointsResponse {
  pricePoints: ProductPricePoint[];
  [key: string]: unknown;
}

export const listProductPricePointsResponseSchema: Schema<ListProductPricePointsResponse> = expandoObject(
  { pricePoints: ['price_points', array(lazy(() => productPricePointSchema))] }
);
