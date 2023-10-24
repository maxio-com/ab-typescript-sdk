/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema } from '../schema';

export interface RefundSuccess {
  refundId: number;
  gatewayTransactionId: number;
  productId: number;
}

export const refundSuccessSchema: Schema<RefundSuccess> = object({
  refundId: ['refund_id', number()],
  gatewayTransactionId: ['gateway_transaction_id', number()],
  productId: ['product_id', number()],
});
