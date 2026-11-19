/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { Component, componentSchema } from './component.js';

/** A Wallet Product is a Component created with no product family, so it returns the full Component field set under a `wallet_product` root instead of `component`. */
export interface WalletProductResponse {
  walletProduct: Component;
  [key: string]: unknown;
}

export const walletProductResponseSchema: Schema<WalletProductResponse> = lazy(
  () => expandoObject({ walletProduct: ['wallet_product', componentSchema] })
);
