/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { Purchase, purchaseSchema } from './purchase.js';

/** Purchases prepaid units for the wallet at a price point, charging the subscription's payment method. */
export interface CreateWalletPurchaseRequest {
  purchase: Purchase;
  [key: string]: unknown;
}

export const createWalletPurchaseRequestSchema: Schema<CreateWalletPurchaseRequest> = lazy(
  () => expandoObject({ purchase: ['purchase', purchaseSchema] })
);
