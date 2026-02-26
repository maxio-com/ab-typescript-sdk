/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema.js';

export interface ScheduledRenewalConfigurationItem {
  id?: number;
  subscriptionId?: number;
  subscriptionRenewalConfigurationId?: number;
  itemId?: number;
  itemType?: string;
  itemSubclass?: string;
  pricePointId?: number;
  pricePointType?: string;
  quantity?: number;
  decimalQuantity?: string;
  createdAt?: string;
  [key: string]: unknown;
}

export const scheduledRenewalConfigurationItemSchema: Schema<ScheduledRenewalConfigurationItem> = expandoObject(
  {
    id: ['id', optional(number())],
    subscriptionId: ['subscription_id', optional(number())],
    subscriptionRenewalConfigurationId: [
      'subscription_renewal_configuration_id',
      optional(number()),
    ],
    itemId: ['item_id', optional(number())],
    itemType: ['item_type', optional(string())],
    itemSubclass: ['item_subclass', optional(string())],
    pricePointId: ['price_point_id', optional(number())],
    pricePointType: ['price_point_type', optional(string())],
    quantity: ['quantity', optional(number())],
    decimalQuantity: ['decimal_quantity', optional(string())],
    createdAt: ['created_at', optional(string())],
  }
);
