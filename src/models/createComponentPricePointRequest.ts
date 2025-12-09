/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  CreateComponentPricePointRequestPricePoint,
  createComponentPricePointRequestPricePointSchema,
} from './containers/createComponentPricePointRequestPricePoint.js';

export interface CreateComponentPricePointRequest {
  pricePoint: CreateComponentPricePointRequestPricePoint;
  [key: string]: unknown;
}

export const createComponentPricePointRequestSchema: Schema<CreateComponentPricePointRequest> = lazy(
  () =>
    expandoObject({
      pricePoint: [
        'price_point',
        createComponentPricePointRequestPricePointSchema,
      ],
    })
);
