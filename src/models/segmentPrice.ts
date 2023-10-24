/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

export interface SegmentPrice {
  id?: number;
  componentId?: number;
  startingQuantity?: number;
  endingQuantity?: number | null;
  unitPrice?: string;
  pricePointId?: number;
  formattedUnitPrice?: string;
  segmentId?: number;
}

export const segmentPriceSchema: Schema<SegmentPrice> = object({
  id: ['id', optional(number())],
  componentId: ['component_id', optional(number())],
  startingQuantity: ['starting_quantity', optional(number())],
  endingQuantity: ['ending_quantity', optional(nullable(number()))],
  unitPrice: ['unit_price', optional(string())],
  pricePointId: ['price_point_id', optional(number())],
  formattedUnitPrice: ['formatted_unit_price', optional(string())],
  segmentId: ['segment_id', optional(number())],
});
