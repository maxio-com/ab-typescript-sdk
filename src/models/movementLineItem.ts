/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { MRRMovement, mRRMovementSchema } from './mRRMovement';

export interface MovementLineItem {
  productId?: number;
  /** For Product (or "baseline") line items, this field will have a value of `0`. */
  componentId?: number;
  pricePointId?: number;
  name?: string;
  mrr?: number;
  mrrMovements?: MRRMovement[];
  quantity?: number;
  prevQuantity?: number;
  /** When `true`, the line item's MRR value will contribute to the `plan` breakout. When `false`, the line item contributes to the `usage` breakout. */
  recurring?: boolean;
}

export const movementLineItemSchema: Schema<MovementLineItem> = object({
  productId: ['product_id', optional(number())],
  componentId: ['component_id', optional(number())],
  pricePointId: ['price_point_id', optional(number())],
  name: ['name', optional(string())],
  mrr: ['mrr', optional(number())],
  mrrMovements: [
    'mrr_movements',
    optional(array(lazy(() => mRRMovementSchema))),
  ],
  quantity: ['quantity', optional(number())],
  prevQuantity: ['prev_quantity', optional(number())],
  recurring: ['recurring', optional(boolean())],
});
