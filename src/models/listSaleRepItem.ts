/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  dict,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { SaleRepItemMrr, saleRepItemMrrSchema } from './saleRepItemMrr';

export interface ListSaleRepItem {
  id?: number;
  fullName?: string;
  subscriptionsCount?: number;
  mrrData?: Record<string, SaleRepItemMrr>;
  testMode?: boolean;
  [key: string]: unknown;
}

export const listSaleRepItemSchema: Schema<ListSaleRepItem> = expandoObject({
  id: ['id', optional(number())],
  fullName: ['full_name', optional(string())],
  subscriptionsCount: ['subscriptions_count', optional(number())],
  mrrData: ['mrr_data', optional(dict(lazy(() => saleRepItemMrrSchema)))],
  testMode: ['test_mode', optional(boolean())],
});
