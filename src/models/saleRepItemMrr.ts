/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface SaleRepItemMrr {
  mrr?: string;
  usage?: string;
  recurring?: string;
  [key: string]: unknown;
}

export const saleRepItemMrrSchema: Schema<SaleRepItemMrr> = expandoObject({
  mrr: ['mrr', optional(string())],
  usage: ['usage', optional(string())],
  recurring: ['recurring', optional(string())],
});
