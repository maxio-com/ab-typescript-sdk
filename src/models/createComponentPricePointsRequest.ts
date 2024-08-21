/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, Schema } from '../schema';
import {
  CreateComponentPricePointsRequestPricePoints,
  createComponentPricePointsRequestPricePointsSchema,
} from './containers/createComponentPricePointsRequestPricePoints';

export interface CreateComponentPricePointsRequest {
  pricePoints: CreateComponentPricePointsRequestPricePoints[];
  [key: string]: unknown;
}

export const createComponentPricePointsRequestSchema: Schema<CreateComponentPricePointsRequest> = expandoObject(
  {
    pricePoints: [
      'price_points',
      array(createComponentPricePointsRequestPricePointsSchema),
    ],
  }
);
