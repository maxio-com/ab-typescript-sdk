/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema';
import {
  CreateOrUpdateSegmentPriceUnitPrice,
  createOrUpdateSegmentPriceUnitPriceSchema,
} from './containers/createOrUpdateSegmentPriceUnitPrice';

export interface CreateOrUpdateSegmentPrice {
  startingQuantity?: number;
  endingQuantity?: number;
  /** The price can contain up to 8 decimal places. i.e. 1.00 or 0.0012 or 0.00000065 */
  unitPrice: CreateOrUpdateSegmentPriceUnitPrice;
  [key: string]: unknown;
}

export const createOrUpdateSegmentPriceSchema: Schema<CreateOrUpdateSegmentPrice> = expandoObject(
  {
    startingQuantity: ['starting_quantity', optional(number())],
    endingQuantity: ['ending_quantity', optional(number())],
    unitPrice: ['unit_price', createOrUpdateSegmentPriceUnitPriceSchema],
  }
);
