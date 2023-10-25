/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import { UsageQuantity, usageQuantitySchema } from './containers/usageQuantity';

export interface Usage {
  id?: number;
  memo?: string;
  createdAt?: string;
  pricePointId?: number;
  quantity?: UsageQuantity;
  overageQuantity?: number;
  componentId?: number;
  componentHandle?: string;
  subscriptionId?: number;
}

export const usageSchema: Schema<Usage> = object({
  id: ['id', optional(number())],
  memo: ['memo', optional(string())],
  createdAt: ['created_at', optional(string())],
  pricePointId: ['price_point_id', optional(number())],
  quantity: ['quantity', optional(usageQuantitySchema)],
  overageQuantity: ['overage_quantity', optional(number())],
  componentId: ['component_id', optional(number())],
  componentHandle: ['component_handle', optional(string())],
  subscriptionId: ['subscription_id', optional(number())],
});
