/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema.js';

/** PCI-safe cardholder fields only. Full card numbers, CVV, and billing address are never included. */
export interface PaymentProfileParams {
  firstName?: string;
  lastName?: string;
  cardType?: string;
  [key: string]: unknown;
}

export const paymentProfileParamsSchema: Schema<PaymentProfileParams> = expandoObject(
  {
    firstName: ['first_name', optional(string())],
    lastName: ['last_name', optional(string())],
    cardType: ['card_type', optional(string())],
  }
);
