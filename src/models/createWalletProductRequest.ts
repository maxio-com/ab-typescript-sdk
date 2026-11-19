/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { WalletProduct, walletProductSchema } from './walletProduct.js';

/** Does not accept `product_family_id`: a Wallet Product never belongs to a product family. The underlying endpoint accepts the param, but only to reject it; sending one returns `422` ("Product family cannot be set on a wallet product") rather than silently ignoring it. */
export interface CreateWalletProductRequest {
  walletProduct: WalletProduct;
  [key: string]: unknown;
}

export const createWalletProductRequestSchema: Schema<CreateWalletProductRequest> = lazy(
  () =>
    expandoObject({ walletProduct: ['wallet_product', walletProductSchema] })
);
