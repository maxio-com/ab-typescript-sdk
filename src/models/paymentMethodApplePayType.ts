/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface PaymentMethodApplePayType {
  type?: string;
}

export const paymentMethodApplePayTypeSchema: Schema<PaymentMethodApplePayType> = object(
  { type: ['type', optional(string())] }
);
