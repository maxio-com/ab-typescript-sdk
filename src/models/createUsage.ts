/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface CreateUsage {
  /** integer by default or decimal number if fractional quantities are enabled for the component */
  quantity?: number;
  pricePointId?: string;
  memo?: string;
}

export const createUsageSchema: Schema<CreateUsage> = object({
  quantity: ['quantity', optional(number())],
  pricePointId: ['price_point_id', optional(string())],
  memo: ['memo', optional(string())],
});
