/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, nullable, optional, Schema, string } from '../schema';

/** A nested data structure detailing the method of payment */
export interface InvoiceEventPayment {
  type?: string;
  maskedAccountNumber?: string;
  maskedRoutingNumber?: string;
  cardBrand?: string;
  cardExpiration?: string;
  lastFour?: string | null;
  maskedCardNumber?: string;
  details?: string | null;
  kind?: string;
  memo?: string | null;
  email?: string;
  [key: string]: unknown;
}

export const invoiceEventPaymentSchema: Schema<InvoiceEventPayment> = expandoObject(
  {
    type: ['type', optional(string())],
    maskedAccountNumber: ['masked_account_number', optional(string())],
    maskedRoutingNumber: ['masked_routing_number', optional(string())],
    cardBrand: ['card_brand', optional(string())],
    cardExpiration: ['card_expiration', optional(string())],
    lastFour: ['last_four', optional(nullable(string()))],
    maskedCardNumber: ['masked_card_number', optional(string())],
    details: ['details', optional(nullable(string()))],
    kind: ['kind', optional(string())],
    memo: ['memo', optional(nullable(string()))],
    email: ['email', optional(string())],
  }
);
