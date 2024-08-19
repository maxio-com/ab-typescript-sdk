/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, Schema } from '../schema';

export interface RefundSuccess {
  refundId: number;
  gatewayTransactionId: number;
  productId: number;
  [key: string]: unknown;
}

export const refundSuccessSchema: Schema<RefundSuccess> = expandoObject({
  refundId: ['refund_id', number()],
  gatewayTransactionId: ['gateway_transaction_id', number()],
  productId: ['product_id', number()],
});
