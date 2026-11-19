/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, number, Schema } from '../schema.js';
import {
  WalletProductListItem,
  walletProductListItemSchema,
} from './walletProductListItem.js';

export interface WalletProductsListResponse {
  walletProducts: WalletProductListItem[];
  /** Total number of Wallet Products matching the filters, across all pages. */
  totalCount: number;
  /** Not a simple count of archived products matching the filters. With `status=archived`, equals `total_count` (there's nothing else to report). With any other `status`, it's `0` whenever `total_count` is non-zero, and only when `total_count` is `0` does it become the number of archived Wallet Products matching the same `q` search term (ignoring `status`): an empty-state hint, not a running total. */
  archivedCount: number;
  [key: string]: unknown;
}

export const walletProductsListResponseSchema: Schema<WalletProductsListResponse> = lazy(
  () =>
    expandoObject({
      walletProducts: ['wallet_products', array(walletProductListItemSchema)],
      totalCount: ['total_count', number()],
      archivedCount: ['archived_count', number()],
    })
);
