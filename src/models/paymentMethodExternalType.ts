/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface PaymentMethodExternalType {
  details: string;
  kind: string;
  memo: string;
  type: string;
}

export const paymentMethodExternalTypeSchema: Schema<PaymentMethodExternalType> = object(
  {
    details: ['details', string()],
    kind: ['kind', string()],
    memo: ['memo', string()],
    type: ['type', string()],
  }
);
