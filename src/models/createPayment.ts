/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface CreatePayment {
  amount: string;
  memo: string;
  paymentDetails: string;
  paymentMethod: string;
}

export const createPaymentSchema: Schema<CreatePayment> = object({
  amount: ['amount', string()],
  memo: ['memo', string()],
  paymentDetails: ['payment_details', string()],
  paymentMethod: ['payment_method', string()],
});
