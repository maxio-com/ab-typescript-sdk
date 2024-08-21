/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema } from '../schema';
import {
  CreateComponentPricePointRequestPricePoint,
  createComponentPricePointRequestPricePointSchema,
} from './containers/createComponentPricePointRequestPricePoint';

export interface CreateComponentPricePointRequest {
  pricePoint: CreateComponentPricePointRequestPricePoint;
  [key: string]: unknown;
}

export const createComponentPricePointRequestSchema: Schema<CreateComponentPricePointRequest> = expandoObject(
  {
    pricePoint: [
      'price_point',
      createComponentPricePointRequestPricePointSchema,
    ],
  }
);
