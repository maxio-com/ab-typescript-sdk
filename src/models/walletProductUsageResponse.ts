/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema.js';
import { ActiveWallets, activeWalletsSchema } from './activeWallets.js';
import {
  WalletProductUsageTemplate,
  walletProductUsageTemplateSchema,
} from './walletProductUsageTemplate.js';

export interface WalletProductUsageResponse {
  /** Wallet templates billing through this product at its default price point. */
  walletTemplates: WalletProductUsageTemplate[];
  /** Wallet templates billing through this product at a price point other than the default. */
  pricePointOverrides: WalletProductUsageTemplate[];
  activeWallets: ActiveWallets;
  [key: string]: unknown;
}

export const walletProductUsageResponseSchema: Schema<WalletProductUsageResponse> = lazy(
  () =>
    expandoObject({
      walletTemplates: [
        'wallet_templates',
        array(walletProductUsageTemplateSchema),
      ],
      pricePointOverrides: [
        'price_point_overrides',
        array(walletProductUsageTemplateSchema),
      ],
      activeWallets: ['active_wallets', activeWalletsSchema],
    })
);
