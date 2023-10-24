/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

export interface InvoicePaymentMethod {
  details?: string;
  kind?: string;
  memo?: string;
  type?: string;
  cardBrand?: string;
  cardExpiration?: string;
  lastFour?: string | null;
  maskedCardNumber?: string;
}

export const invoicePaymentMethodSchema: Schema<InvoicePaymentMethod> = object({
  details: ['details', optional(string())],
  kind: ['kind', optional(string())],
  memo: ['memo', optional(string())],
  type: ['type', optional(string())],
  cardBrand: ['card_brand', optional(string())],
  cardExpiration: ['card_expiration', optional(string())],
  lastFour: ['last_four', optional(nullable(string()))],
  maskedCardNumber: ['masked_card_number', optional(string())],
});
