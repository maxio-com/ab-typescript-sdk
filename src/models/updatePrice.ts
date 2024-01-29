/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema } from '../schema';
import {
  UpdatePriceEndingQuantity,
  updatePriceEndingQuantitySchema,
} from './containers/updatePriceEndingQuantity';
import {
  UpdatePriceStartingQuantity,
  updatePriceStartingQuantitySchema,
} from './containers/updatePriceStartingQuantity';
import {
  UpdatePriceUnitPrice,
  updatePriceUnitPriceSchema,
} from './containers/updatePriceUnitPrice';

export interface UpdatePrice {
  id?: number;
  endingQuantity?: UpdatePriceEndingQuantity;
  /** The price can contain up to 8 decimal places. i.e. 1.00 or 0.0012 or 0.00000065 */
  unitPrice?: UpdatePriceUnitPrice;
  destroy?: boolean;
  startingQuantity?: UpdatePriceStartingQuantity;
}

export const updatePriceSchema: Schema<UpdatePrice> = object({
  id: ['id', optional(number())],
  endingQuantity: [
    'ending_quantity',
    optional(updatePriceEndingQuantitySchema),
  ],
  unitPrice: ['unit_price', optional(updatePriceUnitPriceSchema)],
  destroy: ['_destroy', optional(boolean())],
  startingQuantity: [
    'starting_quantity',
    optional(updatePriceStartingQuantitySchema),
  ],
});
