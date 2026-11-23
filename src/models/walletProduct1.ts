/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  nullable,
  optional,
  Schema,
  string,
} from '../schema.js';
import { ItemCategory, itemCategorySchema } from './itemCategory.js';

export interface WalletProduct1 {
  name?: string;
  description?: string | null;
  taxable?: boolean;
  taxCode?: string | null;
  accountingCode?: string | null;
  /** One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other */
  itemCategory?: ItemCategory | null;
  [key: string]: unknown;
}

export const walletProduct1Schema: Schema<WalletProduct1> = expandoObject({
  name: ['name', optional(string())],
  description: ['description', optional(nullable(string()))],
  taxable: ['taxable', optional(boolean())],
  taxCode: ['tax_code', optional(nullable(string()))],
  accountingCode: ['accounting_code', optional(nullable(string()))],
  itemCategory: ['item_category', optional(nullable(itemCategorySchema))],
});
