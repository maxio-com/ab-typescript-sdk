/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, nullable, optional, Schema, string } from '../schema';
import {
  InvoiceEventPaymentMethod,
  invoiceEventPaymentMethodSchema,
} from './invoiceEventPaymentMethod';

export interface PaymentMethodCreditCard {
  cardBrand: string;
  cardExpiration?: string;
  lastFour?: string | null;
  maskedCardNumber: string;
  type: InvoiceEventPaymentMethod;
  [key: string]: unknown;
}

export const paymentMethodCreditCardSchema: Schema<PaymentMethodCreditCard> = expandoObject(
  {
    cardBrand: ['card_brand', string()],
    cardExpiration: ['card_expiration', optional(string())],
    lastFour: ['last_four', optional(nullable(string()))],
    maskedCardNumber: ['masked_card_number', string()],
    type: ['type', invoiceEventPaymentMethodSchema],
  }
);
