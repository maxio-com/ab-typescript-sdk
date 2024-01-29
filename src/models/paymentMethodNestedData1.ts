/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

/** A nested data structure detailing the method of payment */
export interface PaymentMethodNestedData1 {
  type?: string;
  maskedAccountNumber: string;
  maskedRoutingNumber: string;
  cardBrand: string;
  cardExpiration?: string;
  lastFour?: string | null;
  maskedCardNumber: string;
  details: string;
  kind: string;
  memo: string;
  email: string;
}

export const paymentMethodNestedData1Schema: Schema<PaymentMethodNestedData1> = object(
  {
    type: ['type', optional(string())],
    maskedAccountNumber: ['masked_account_number', string()],
    maskedRoutingNumber: ['masked_routing_number', string()],
    cardBrand: ['card_brand', string()],
    cardExpiration: ['card_expiration', optional(string())],
    lastFour: ['last_four', optional(nullable(string()))],
    maskedCardNumber: ['masked_card_number', string()],
    details: ['details', string()],
    kind: ['kind', string()],
    memo: ['memo', string()],
    email: ['email', string()],
  }
);
