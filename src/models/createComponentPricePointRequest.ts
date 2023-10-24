/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  CreateComponentPricePointRequestPricePoint,
  createComponentPricePointRequestPricePointSchema,
} from './containers/createComponentPricePointRequestPricePoint';

export interface CreateComponentPricePointRequest {
  pricePoint: CreateComponentPricePointRequestPricePoint;
}

export const createComponentPricePointRequestSchema: Schema<CreateComponentPricePointRequest> = object(
  {
    pricePoint: [
      'price_point',
      lazy(() => createComponentPricePointRequestPricePointSchema),
    ],
  }
);
