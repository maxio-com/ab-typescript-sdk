/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  CreateProductPricePoint,
  createProductPricePointSchema,
} from './createProductPricePoint';

export interface CreateProductPricePointRequest {
  pricePoint: CreateProductPricePoint;
}

export const createProductPricePointRequestSchema: Schema<CreateProductPricePointRequest> = object(
  { pricePoint: ['price_point', lazy(() => createProductPricePointSchema)] }
);
