/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema.js';
import {
  CreateComponentPricePointsRequestPricePoints,
  createComponentPricePointsRequestPricePointsSchema,
} from './containers/createComponentPricePointsRequestPricePoints.js';

export interface CreateComponentPricePointsRequest {
  pricePoints: CreateComponentPricePointsRequestPricePoints[];
  [key: string]: unknown;
}

export const createComponentPricePointsRequestSchema: Schema<CreateComponentPricePointsRequest> = lazy(
  () =>
    expandoObject({
      pricePoints: [
        'price_points',
        array(createComponentPricePointsRequestPricePointsSchema),
      ],
    })
);
