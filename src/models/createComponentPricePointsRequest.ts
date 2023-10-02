/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
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
