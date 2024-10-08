/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema';

export interface CreateOfferComponent {
  componentId?: number;
  pricePointId?: number;
  startingQuantity?: number;
  [key: string]: unknown;
}

export const createOfferComponentSchema: Schema<CreateOfferComponent> = expandoObject(
  {
    componentId: ['component_id', optional(number())],
    pricePointId: ['price_point_id', optional(number())],
    startingQuantity: ['starting_quantity', optional(number())],
  }
);
