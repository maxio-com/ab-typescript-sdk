/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, Schema } from '../schema';

export interface PaymentRelatedEvents {
  productId: number;
  accountTransactionId: number;
  [key: string]: unknown;
}

export const paymentRelatedEventsSchema: Schema<PaymentRelatedEvents> = expandoObject(
  {
    productId: ['product_id', number()],
    accountTransactionId: ['account_transaction_id', number()],
  }
);
