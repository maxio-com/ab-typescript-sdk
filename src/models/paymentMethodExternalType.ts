/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface PaymentMethodExternalType {
  details?: string;
  kind?: string;
  memo?: string;
  type?: string;
}

export const paymentMethodExternalTypeSchema: Schema<PaymentMethodExternalType> = object(
  {
    details: ['details', optional(string())],
    kind: ['kind', optional(string())],
    memo: ['memo', optional(string())],
    type: ['type', optional(string())],
  }
);
