/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema } from '../schema';
import {
  PriceEndingQuantity,
  priceEndingQuantitySchema,
} from './containers/priceEndingQuantity';
import {
  PriceStartingQuantity,
  priceStartingQuantitySchema,
} from './containers/priceStartingQuantity';
import {
  PriceUnitPrice,
  priceUnitPriceSchema,
} from './containers/priceUnitPrice';

export interface Price {
  startingQuantity: PriceStartingQuantity;
  endingQuantity?: PriceEndingQuantity | null;
  /** The price can contain up to 8 decimal places. i.e. 1.00 or 0.0012 or 0.00000065 */
  unitPrice: PriceUnitPrice;
}

export const priceSchema: Schema<Price> = object({
  startingQuantity: ['starting_quantity', priceStartingQuantitySchema],
  endingQuantity: [
    'ending_quantity',
    optional(nullable(priceEndingQuantitySchema)),
  ],
  unitPrice: ['unit_price', priceUnitPriceSchema],
});
