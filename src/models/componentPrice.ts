/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';

export interface ComponentPrice {
  id?: number;
  componentId?: number;
  startingQuantity?: number;
  endingQuantity?: number | null;
  unitPrice?: string;
  pricePointId?: number;
  formattedUnitPrice?: string;
  segmentId?: number | null;
  [key: string]: unknown;
}

export const componentPriceSchema: Schema<ComponentPrice> = expandoObject({
  id: ['id', optional(number())],
  componentId: ['component_id', optional(number())],
  startingQuantity: ['starting_quantity', optional(number())],
  endingQuantity: ['ending_quantity', optional(nullable(number()))],
  unitPrice: ['unit_price', optional(string())],
  pricePointId: ['price_point_id', optional(number())],
  formattedUnitPrice: ['formatted_unit_price', optional(string())],
  segmentId: ['segment_id', optional(nullable(number()))],
});
