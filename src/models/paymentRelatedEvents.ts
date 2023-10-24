/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema } from '../schema';

export interface PaymentRelatedEvents {
  productId: number;
  accountTransactionId: number;
}

export const paymentRelatedEventsSchema: Schema<PaymentRelatedEvents> = object({
  productId: ['product_id', number()],
  accountTransactionId: ['account_transaction_id', number()],
});
