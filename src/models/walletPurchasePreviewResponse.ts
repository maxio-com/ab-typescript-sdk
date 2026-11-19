/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema.js';
import {
  WalletPurchasePreview,
  walletPurchasePreviewSchema,
} from './walletPurchasePreview.js';

export interface WalletPurchasePreviewResponse {
  walletPurchasePreviews: WalletPurchasePreview[];
  [key: string]: unknown;
}

export const walletPurchasePreviewResponseSchema: Schema<WalletPurchasePreviewResponse> = lazy(
  () =>
    expandoObject({
      walletPurchasePreviews: [
        'wallet_purchase_previews',
        array(walletPurchasePreviewSchema),
      ],
    })
);
