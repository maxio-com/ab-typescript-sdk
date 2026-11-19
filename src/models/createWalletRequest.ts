/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { Wallet1, wallet1Schema } from './wallet1.js';

export interface CreateWalletRequest {
  wallet: Wallet1;
  [key: string]: unknown;
}

export const createWalletRequestSchema: Schema<CreateWalletRequest> = lazy(() =>
  expandoObject({ wallet: ['wallet', wallet1Schema] })
);
