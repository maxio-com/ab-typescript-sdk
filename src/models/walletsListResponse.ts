/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema.js';
import {
  ListPublicKeysMeta,
  listPublicKeysMetaSchema,
} from './listPublicKeysMeta.js';
import { Wallet, walletSchema } from './wallet.js';

export interface WalletsListResponse {
  wallets: Wallet[];
  meta: ListPublicKeysMeta;
  [key: string]: unknown;
}

export const walletsListResponseSchema: Schema<WalletsListResponse> = lazy(() =>
  expandoObject({
    wallets: ['wallets', array(walletSchema)],
    meta: ['meta', listPublicKeysMetaSchema],
  })
);
