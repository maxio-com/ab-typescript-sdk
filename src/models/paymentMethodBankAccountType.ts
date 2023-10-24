/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface PaymentMethodBankAccountType {
  maskedAccountNumber?: string;
  maskedRoutingNumber?: string;
  type?: string;
}

export const paymentMethodBankAccountTypeSchema: Schema<PaymentMethodBankAccountType> = object(
  {
    maskedAccountNumber: ['masked_account_number', optional(string())],
    maskedRoutingNumber: ['masked_routing_number', optional(string())],
    type: ['type', optional(string())],
  }
);
