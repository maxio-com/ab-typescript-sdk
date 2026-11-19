/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { WalletProduct1, walletProduct1Schema } from './walletProduct1.js';

/** Only `name`, `description`, `taxable`, `tax_code`, `accounting_code`, and `item_category` are mutable. `unit_name`, `handle`, `price_point`, and `price_points` are not accepted here: the request still returns `200`, but those fields are silently ignored and nothing about them changes. `handle` stays fixed because it's the Wallet Product's only stable identifier on a surface with no product family in the path; `unit_name` stays fixed because a wallet's behavior snapshots it into the wallet's own `unit` field and never re-derives it. */
export interface UpdateWalletProductRequest {
  walletProduct: WalletProduct1;
  [key: string]: unknown;
}

export const updateWalletProductRequestSchema: Schema<UpdateWalletProductRequest> = lazy(
  () =>
    expandoObject({ walletProduct: ['wallet_product', walletProduct1Schema] })
);
