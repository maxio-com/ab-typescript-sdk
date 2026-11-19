/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  nullable,
  optional,
  Schema,
  string,
} from '../schema.js';
import { ItemCategory, itemCategorySchema } from './itemCategory.js';
import {
  WalletProductPricePointAttributes,
  walletProductPricePointAttributesSchema,
} from './walletProductPricePointAttributes.js';

export interface WalletProduct {
  name: string;
  /** The name of the unit the Wallet Product's usage is measured in, for example `tokens`. */
  unitName: string;
  handle?: string;
  description?: string | null;
  taxable?: boolean;
  taxCode?: string | null;
  accountingCode?: string | null;
  /** One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other */
  itemCategory?: ItemCategory | null;
  /** Creates one price point for the Wallet Product in the same call. Ignored if `price_points` is also sent. */
  pricePoint?: WalletProductPricePointAttributes;
  /** Creates several price points for the Wallet Product in the same call, winning over `price_point` if both are sent. The first price point created becomes the Wallet Product's default. The whole call is one transaction: if any price point in the array fails validation, nothing is created, including the Wallet Product itself. */
  pricePoints?: WalletProductPricePointAttributes[];
  [key: string]: unknown;
}

export const walletProductSchema: Schema<WalletProduct> = lazy(() =>
  expandoObject({
    name: ['name', string()],
    unitName: ['unit_name', string()],
    handle: ['handle', optional(string())],
    description: ['description', optional(nullable(string()))],
    taxable: ['taxable', optional(boolean())],
    taxCode: ['tax_code', optional(nullable(string()))],
    accountingCode: ['accounting_code', optional(nullable(string()))],
    itemCategory: ['item_category', optional(nullable(itemCategorySchema))],
    pricePoint: [
      'price_point',
      optional(walletProductPricePointAttributesSchema),
    ],
    pricePoints: [
      'price_points',
      optional(array(walletProductPricePointAttributesSchema)),
    ],
  })
);
