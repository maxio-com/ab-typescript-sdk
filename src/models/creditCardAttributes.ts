/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface CreditCardAttributes {
  fullNumber?: string;
  expirationMonth?: string;
  expirationYear?: string;
}

export const creditCardAttributesSchema: Schema<CreditCardAttributes> = object({
  fullNumber: ['full_number', optional(string())],
  expirationMonth: ['expiration_month', optional(string())],
  expirationYear: ['expiration_year', optional(string())],
});
