/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import {
  CreateComponentPricePointsRequestPricePoints,
  createComponentPricePointsRequestPricePointsSchema,
} from './containers/createComponentPricePointsRequestPricePoints';

export interface CreateComponentPricePointsRequest {
  pricePoints: CreateComponentPricePointsRequestPricePoints[];
}

export const createComponentPricePointsRequestSchema: Schema<CreateComponentPricePointsRequest> = object(
  {
    pricePoints: [
      'price_points',
      array(lazy(() => createComponentPricePointsRequestPricePointsSchema)),
    ],
  }
);
