/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface SaleRepItemMrr {
  mrr?: string;
  usage?: string;
  recurring?: string;
}

export const saleRepItemMrrSchema: Schema<SaleRepItemMrr> = object({
  mrr: ['mrr', optional(string())],
  usage: ['usage', optional(string())],
  recurring: ['recurring', optional(string())],
});
