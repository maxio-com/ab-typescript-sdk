/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { Wallet2, wallet2Schema } from './wallet2.js';

export interface UpdateWalletRequest {
  wallet: Wallet2;
  [key: string]: unknown;
}

export const updateWalletRequestSchema: Schema<UpdateWalletRequest> = lazy(() =>
  expandoObject({ wallet: ['wallet', wallet2Schema] })
);
