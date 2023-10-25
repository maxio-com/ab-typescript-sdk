/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';
import {
  CreateOrUpdateSegmentPriceUnitPrice,
  createOrUpdateSegmentPriceUnitPriceSchema,
} from './containers/createOrUpdateSegmentPriceUnitPrice';

export interface CreateOrUpdateSegmentPrice {
  startingQuantity?: number;
  endingQuantity?: number;
  /** The price can contain up to 8 decimal places. i.e. 1.00 or 0.0012 or 0.00000065 */
  unitPrice: CreateOrUpdateSegmentPriceUnitPrice;
}

export const createOrUpdateSegmentPriceSchema: Schema<CreateOrUpdateSegmentPrice> = object(
  {
    startingQuantity: ['starting_quantity', optional(number())],
    endingQuantity: ['ending_quantity', optional(number())],
    unitPrice: ['unit_price', createOrUpdateSegmentPriceUnitPriceSchema],
  }
);
