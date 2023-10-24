/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface PaymentMethodPaypalType {
  email?: string;
  type?: string;
}

export const paymentMethodPaypalTypeSchema: Schema<PaymentMethodPaypalType> = object(
  { email: ['email', optional(string())], type: ['type', optional(string())] }
);
