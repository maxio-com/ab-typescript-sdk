/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, Schema, string } from '../schema.js';

/** A price quote for a purchase, without charging anything. */
export interface WalletPurchasePreview {
  pricePointId: number;
  /** The three-letter currency code the `amount` is denominated in, matching the subscription's currency. */
  currency: string;
  /** The number of units the quote is for, as a decimal string. */
  quantity: string;
  /** The price for `quantity` units at this price point, as a decimal string. */
  amount: string;
  [key: string]: unknown;
}

export const walletPurchasePreviewSchema: Schema<WalletPurchasePreview> = expandoObject(
  {
    pricePointId: ['price_point_id', number()],
    currency: ['currency', string()],
    quantity: ['quantity', string()],
    amount: ['amount', string()],
  }
);
