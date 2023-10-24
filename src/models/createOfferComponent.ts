/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

export interface CreateOfferComponent {
  componentId?: number;
  startingQuantity?: number;
}

export const createOfferComponentSchema: Schema<CreateOfferComponent> = object({
  componentId: ['component_id', optional(number())],
  startingQuantity: ['starting_quantity', optional(number())],
});
