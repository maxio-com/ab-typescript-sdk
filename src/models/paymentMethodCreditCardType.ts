/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

export interface PaymentMethodCreditCardType {
  cardBrand: string;
  cardExpiration?: string;
  lastFour?: string | null;
  maskedCardNumber: string;
  type: string;
}

export const paymentMethodCreditCardTypeSchema: Schema<PaymentMethodCreditCardType> = object(
  {
    cardBrand: ['card_brand', string()],
    cardExpiration: ['card_expiration', optional(string())],
    lastFour: ['last_four', optional(nullable(string()))],
    maskedCardNumber: ['masked_card_number', string()],
    type: ['type', string()],
  }
);
