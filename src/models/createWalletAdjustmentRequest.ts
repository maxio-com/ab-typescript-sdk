/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { Adjustment, adjustmentSchema } from './adjustment.js';

/** A signed correction to a specific grant's balance, or to an overdraft entry's usage, intended for support and ops use. */
export interface CreateWalletAdjustmentRequest {
  adjustment: Adjustment;
  [key: string]: unknown;
}

export const createWalletAdjustmentRequestSchema: Schema<CreateWalletAdjustmentRequest> = lazy(
  () => expandoObject({ adjustment: ['adjustment', adjustmentSchema] })
);
