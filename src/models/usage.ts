/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { UsageQuantity, usageQuantitySchema } from './containers/usageQuantity';

export interface Usage {
  id?: bigint;
  memo?: string | null;
  createdAt?: string;
  pricePointId?: number;
  quantity?: UsageQuantity;
  overageQuantity?: number;
  componentId?: number;
  componentHandle?: string;
  subscriptionId?: number;
  [key: string]: unknown;
}

export const usageSchema: Schema<Usage> = expandoObject({
  id: ['id', optional(bigint())],
  memo: ['memo', optional(nullable(string()))],
  createdAt: ['created_at', optional(string())],
  pricePointId: ['price_point_id', optional(number())],
  quantity: ['quantity', optional(usageQuantitySchema)],
  overageQuantity: ['overage_quantity', optional(number())],
  componentId: ['component_id', optional(number())],
  componentHandle: ['component_handle', optional(string())],
  subscriptionId: ['subscription_id', optional(number())],
});
