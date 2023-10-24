/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { ProductPricePoint, productPricePointSchema } from './productPricePoint';

export interface ListProductPricePointsResponse {
  pricePoints: ProductPricePoint[];
}

export const listProductPricePointsResponseSchema: Schema<ListProductPricePointsResponse> = object(
  { pricePoints: ['price_points', array(lazy(() => productPricePointSchema))] }
);
