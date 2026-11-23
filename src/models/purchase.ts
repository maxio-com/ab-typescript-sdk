/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  PurchaseQuantity,
  purchaseQuantitySchema,
} from './containers/purchaseQuantity.js';

export interface Purchase {
  /** The number of wallet units to purchase, as a decimal string with at most 8 fractional digits. Send fractional values as strings: a JSON number with a decimal point is rejected with `422`, because a double-precision float may already have lost precision before the request arrives. */
  quantity: PurchaseQuantity;
  /** The price point to purchase at. Must belong to the wallet's billing product. Defaults to the `price_point_id` set on the wallet. */
  pricePointId?: number;
  /** (Optional) A note recorded on the resulting grant's ledger row. */
  memo?: string | null;
  [key: string]: unknown;
}

export const purchaseSchema: Schema<Purchase> = lazy(() =>
  expandoObject({
    quantity: ['quantity', purchaseQuantitySchema],
    pricePointId: ['price_point_id', optional(number())],
    memo: ['memo', optional(nullable(string()))],
  })
);
