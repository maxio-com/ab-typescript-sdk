/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  UpdateComponentPricePoint,
  updateComponentPricePointSchema,
} from './updateComponentPricePoint';

export interface UpdateComponentPricePointRequest {
  pricePoint?: UpdateComponentPricePoint;
}

export const updateComponentPricePointRequestSchema: Schema<UpdateComponentPricePointRequest> = object(
  {
    pricePoint: [
      'price_point',
      optional(lazy(() => updateComponentPricePointSchema)),
    ],
  }
);
