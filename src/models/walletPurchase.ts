/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, nullable, number, Schema, string } from '../schema.js';

/** A completed unit purchase. */
export interface WalletPurchase {
  /** The id of the grant this purchase created. When the wallet was overdrawn by at least the purchased quantity, the units repay the debt and the grant is still created, with `remaining` of `0` and `original` equal to the purchased quantity. */
  id: number;
  /** The price point the purchase was priced at. */
  pricePointId: number;
  /** The uid of the invoice created to collect payment for this purchase. */
  invoiceUid: string;
  /** The number of units purchased, as a decimal string. */
  quantity: string;
  /** When the purchased units expire, following the funding entitlement's grant expiration policy. `null` when the wallet has no funding entitlement or its entitlements disagree on an expiration policy. */
  expiresAt: string | null;
  [key: string]: unknown;
}

export const walletPurchaseSchema: Schema<WalletPurchase> = expandoObject({
  id: ['id', number()],
  pricePointId: ['price_point_id', number()],
  invoiceUid: ['invoice_uid', string()],
  quantity: ['quantity', string()],
  expiresAt: ['expires_at', nullable(string())],
});
